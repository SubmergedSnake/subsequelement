import { BoundaryCorners, Corner, ElementWithAlignment, IsHtmlElementLike, SupportedAngle } from "./types";


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

export const getAlignmentIndexForElements = (startingElement: IsHtmlElementLike, otherElements: IsHtmlElementLike[], angle: SupportedAngle): ElementWithAlignment[] => {

	const alignmentI = (startingElement: IsHtmlElementLike, angle: SupportedAngle) => {

		return (otherElement: IsHtmlElementLike): ElementWithAlignment => {
			const { left: oeLeft, right: oeRight, top: oeTop, bottom: oeBottom } = otherElement.getBoundingClientRect()
			const { left: sLeft, right: sRight, top: sTop, bottom: sBottom } = startingElement.getBoundingClientRect()

			if (angle.valueOf() === 90) {
				const alignment = calculateAlignment([oeLeft, oeRight], [sLeft, sRight])
				return { e: otherElement, alignment }
			}
			else if (angle.valueOf() === 0) {
				const alignment = calculateAlignment([oeTop, oeBottom], [sTop, sBottom])
				return { e: otherElement, alignment }
			}

			const { bottomBoundary: { x: bottomX, y: bottomY }, topBoundary: { x: topX, y: topY } } = determineElementCornersForBoundary(angle)


			const startingElementYInterceptTop = getYIntercept({ x: startingElement.getBoundingClientRect()[topX], y: startingElement.getBoundingClientRect()[topY] }, angle)
			const startingElementYInterceptBottom = getYIntercept({ x: startingElement.getBoundingClientRect()[bottomX], y: startingElement.getBoundingClientRect()[bottomY] }, angle)

			const otherElementYInterceptTop = getYIntercept({ x: otherElement.getBoundingClientRect()[topX], y: otherElement.getBoundingClientRect()[topY] }, angle)
			const otherElementYInterceptBottom = getYIntercept({ x: otherElement.getBoundingClientRect()[bottomX], y: otherElement.getBoundingClientRect()[bottomY] }, angle)
			const alignment = calculateAlignment([startingElementYInterceptTop, startingElementYInterceptBottom], [otherElementYInterceptTop, otherElementYInterceptBottom])

			return { e: otherElement, alignment }
		}
	}
	return otherElements.map(alignmentI(startingElement, angle))
}
