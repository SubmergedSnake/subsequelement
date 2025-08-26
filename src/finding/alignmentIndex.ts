import { ElementWithAlignment, HasIdAndElementCoords } from "../types";

type BoundaryCorners = {
	bottomBoundary: { x: 'left' | 'right', y: 'top' | 'bottom' }
	topBoundary: { x: 'left' | 'right', y: 'top' | 'bottom' }
}
type Corner = { x: number, y: number }
type SupportedAngle = 0 | 45 | 90 | -45

const degreesToRadians = (degrees: number) => {
	return degrees * (Math.PI / 180);
}


export const calculateAlignment = (startingElementRange: number[], otherElementRange: number[]): number => {
	const smallestRangeEnd = Math.min(startingElementRange[1], otherElementRange[1])
	const largestRangeStart = Math.max(startingElementRange[0], otherElementRange[0])
	let alignment = smallestRangeEnd - largestRangeStart
	return alignment
}

const getYIntercept = (origin: Corner, degrees: number): number => {
	const m = degreesToRadians(degrees)
	const yIntercept = origin.y - m * origin.x
	return yIntercept
}

const determineElementCornersForBoundary = (angle: SupportedAngle): BoundaryCorners => {

	switch (angle) {
		case 45:
			return { bottomBoundary: { x: 'left', y: 'bottom' }, topBoundary: { x: 'right', y: 'top' } }
		case -45:
			return { bottomBoundary: { x: 'right', y: 'bottom' }, topBoundary: { x: 'left', y: 'top' } }
		default: throw new Error('Unsupported angle')
	}
}

export const getAlignmentIndexForElements = (startingElement: HasIdAndElementCoords, otherElements: HasIdAndElementCoords[], angle: SupportedAngle): ElementWithAlignment[] => {

	const alignmentI = (startingElement: HasIdAndElementCoords, angle: SupportedAngle) => {

		return (otherElement: HasIdAndElementCoords): ElementWithAlignment => {
			const { left: oeLeft, right: oeRight, top: oeTop, bottom: oeBottom } = otherElement

			if (angle.valueOf() === 90) {
				const alignment = calculateAlignment([oeLeft, oeRight], [startingElement.left, startingElement.right])
				return { e: otherElement, alignment }
			}
			else if (angle.valueOf() === 0) {
				const alignment = calculateAlignment([oeTop, oeBottom], [startingElement.top, startingElement.bottom])
				return { e: otherElement, alignment }
			}

			const { bottomBoundary: { x: bottomX, y: bottomY }, topBoundary: { x: topX, y: topY } } = determineElementCornersForBoundary(angle)


			const startingElementYInterceptTop = getYIntercept({ x: startingElement[topX], y: startingElement[topY] }, angle)
			const startingElementYInterceptBottom = getYIntercept({ x: startingElement[bottomX], y: startingElement[bottomY] }, angle)

			const otherElementYInterceptTop = getYIntercept({ x: otherElement[topX], y: otherElement[topY] }, angle)
			const otherElementYInterceptBottom = getYIntercept({ x: otherElement[bottomX], y: otherElement[bottomY] }, angle)
			const alignment = calculateAlignment([startingElementYInterceptTop, startingElementYInterceptBottom], [otherElementYInterceptTop, otherElementYInterceptBottom])

			return { e: otherElement, alignment }
		}
	}
	return otherElements.map(alignmentI(startingElement, angle))
}
