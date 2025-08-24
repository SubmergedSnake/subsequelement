import { HasIdAndElementCoords } from "../types";
import { isRangeOverlap } from "range-overlap";

type BoundaryCorners = {
	bottomBoundary: { x: 'left' | 'right', y: 'top' | 'bottom' }
	topBoundary: { x: 'left' | 'right', y: 'top' | 'bottom' }
}
type Corner = { x: number, y: number }
type SupportedAngle = 0 | 45 | 90 | -45

export const degreesToRadians = (degrees: number) => {
	return degrees * (Math.PI / 180);
}

const calculateAlignment = (range1: number[], range2: number[]) => {
	let overlap = Math.max(0, Math.min(range1[1], range2[1]) - Math.max(range1[0], range2[0]));
	return overlap;
}


const getYIntercept = (origin: Corner, degrees: number): number => {
	const m = degreesToRadians(degrees)
	const yIntercept = origin.y - m * origin.x
	return yIntercept
}

export const determineElementCornersForBoundary = (angle: SupportedAngle): BoundaryCorners => {

	switch (angle) {
		case 45:
			return { bottomBoundary: { x: 'left', y: 'bottom' }, topBoundary: { x: 'right', y: 'top' } }
		case -45:
			return { bottomBoundary: { x: 'right', y: 'bottom' }, topBoundary: { x: 'left', y: 'top' } }
		default: throw new Error('Unsupported angle')
	}
}


const isAligned = (startingElement: HasIdAndElementCoords, angle: SupportedAngle) => {

	return (otherElement: HasIdAndElementCoords) => {
		const { left: oeLeft, right: oeRight, top: oeTop, bottom: oeBottom } = otherElement

		if (angle.valueOf() === 90) {
			const alignmentIndex = calculateAlignment([oeLeft, oeRight], [startingElement.left, startingElement.right])
			console.log(`There is alignment vertically: ${alignmentIndex}`)
			return isRangeOverlap([oeLeft, oeRight], [startingElement.left, startingElement.right], true)
		}
		else if (angle.valueOf() === 0) {
			const alignmentIndex = calculateAlignment([oeTop, oeBottom], [startingElement.top, startingElement.bottom])
			console.log(`There is alignment horizontally: ${alignmentIndex}`)
			return isRangeOverlap([oeTop, oeBottom], [startingElement.top, startingElement.bottom], true)
		}

		const { bottomBoundary: { x: bottomX, y: bottomY }, topBoundary: { x: topX, y: topY } } = determineElementCornersForBoundary(angle)

		let isAligned

		const startingElementYInterceptTop = getYIntercept({ x: startingElement[topX], y: startingElement[topY] }, angle)
		const startingElementYInterceptBottom = getYIntercept({ x: startingElement[bottomX], y: startingElement[bottomY] }, angle)

		const otherElementYInterceptTop = getYIntercept({ x: otherElement[topX], y: otherElement[topY] }, angle)
		const otherElementYInterceptBottom = getYIntercept({ x: otherElement[bottomX], y: otherElement[bottomY] }, angle)
		const alignment = calculateAlignment([startingElementYInterceptTop, startingElementYInterceptBottom], [otherElementYInterceptTop, otherElementYInterceptBottom])
		console.log(`There is alignment diagonally: ${alignment}`);


		isAligned = isRangeOverlap([startingElementYInterceptTop, startingElementYInterceptBottom], [otherElementYInterceptTop, otherElementYInterceptBottom], true)
		return isAligned
	}
}

export const findAlignedElements = (startingElement: HasIdAndElementCoords, elements: HasIdAndElementCoords[], angle: SupportedAngle) => {
	return elements.filter(isAligned(startingElement, angle))
}
