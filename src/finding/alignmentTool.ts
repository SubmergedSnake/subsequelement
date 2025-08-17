import { HasIdAndElementCoords } from "../types";
import { isRangeOverlap } from "range-overlap";

type BoundaryCorners = {
	begin: { x: 'left' | 'right', y: 'top' | 'bottom' }
	end: { x: 'left' | 'right', y: 'top' | 'bottom' }
}
type BoundaryLine = { yIntercept: number, slope: number }
type Corner = { x: number, y: number }
type SupportedAngle = 0 | 45 | 90 | 135

const degreesToRadians = (degrees: number) => {
	return degrees * (Math.PI / 180);
}


export const getBoundary = (origin: Corner, degrees: number): BoundaryLine => {
	console.log(`Getting boundary for origin: ${JSON.stringify(origin)}`)
	const m = degreesToRadians(degrees)
	const yIntercept = m * (0 - origin.x) + origin.y
	return { yIntercept, slope: m }
}

export const determineBoundaryCornersByAngle = (angle: SupportedAngle): BoundaryCorners => {

	switch (angle) {
		case 0:
			return { begin: { x: 'left', y: 'top' }, end: { x: 'left', y: 'bottom' } }
		case 45:
			return { begin: { x: 'left', y: 'top' }, end: { x: 'right', y: 'bottom' } }
		case 90:
			return { begin: { x: 'left', y: 'top' }, end: { x: 'right', y: 'top' } }
		case 135:
			return { begin: { x: 'right', y: 'top' }, end: { x: 'left', y: 'bottom' } }
		default: throw new Error('Unsupported angle')
	}
}


export const findAlignedElements = (startingElement: HasIdAndElementCoords, angle: SupportedAngle) => {

	return (otherElement: HasIdAndElementCoords) => {
		const { left: oeLeft, right: oeRight, top: oeTop, bottom: oeBottom } = otherElement

		const boundaryCorners = determineBoundaryCornersByAngle(angle)
		const { begin: { x: beginX, y: beginY }, end: { x: endX, y: endY } } = boundaryCorners


		const boundaryBegin = getBoundary({ x: startingElement[beginX] + 1, y: startingElement[beginY] + 1 }, angle)
		const boundaryEnd = getBoundary({ x: startingElement[endX] - 1, y: startingElement[endY] - 1 }, angle)

		const boundaryBeginYAtElementXPosition = boundaryBegin.slope * oeRight + boundaryBegin.yIntercept
		const boundaryEndYAtElementXPosition = boundaryEnd.slope * oeLeft + boundaryEnd.yIntercept

		const thereIsYOverlap = isRangeOverlap(oeTop, oeBottom, boundaryBeginYAtElementXPosition, boundaryEndYAtElementXPosition)

		const boundaryBeginXAtElementYPosition = (oeTop - boundaryBegin.yIntercept) / boundaryBegin.slope
		const boundaryEndXAtElementYPosition = (oeBottom - boundaryEnd.yIntercept) / boundaryEnd.slope

		const thereIsXOverlap = isRangeOverlap(oeLeft, oeRight, boundaryBeginXAtElementYPosition, boundaryEndXAtElementYPosition)

		console.log(`there is x overlap: ${thereIsXOverlap}`)
		console.log(`there is y overlap: ${thereIsYOverlap}`)

		let isAligned

		if (angle === 0) {
			isAligned = thereIsYOverlap
		} else if (angle === 90) {
			isAligned = thereIsXOverlap
		} else {
			isAligned = thereIsYOverlap && thereIsYOverlap
		}
		return isAligned
	}
}
