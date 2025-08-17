import { HasIdAndElementCoords } from "../types";
import { isRangeOverlap } from "range-overlap";

type BoundaryCorners = {
	begin: { x: 'left' | 'right', y: 'top' | 'bottom' }
	end: { x: 'left' | 'right', y: 'top' | 'bottom' }
}
type BoundaryLine = { yIntercept: number, slope: number }
type Corner = { x: number, y: number }
type SupportedAngle = 0 | 45 | 90 | 135 | 225 | 315

const degreesToRadians = (degrees: number) => {
	return degrees * (Math.PI / 180);
}


export const getDiagonalBoundary = (origin: Corner, degrees: number): BoundaryLine => {
	const m = degreesToRadians(degrees)
	const yIntercept = origin.y - m * origin.x
	return { yIntercept, slope: m }
}

export const determineBoundaryCornersByAngle = (angle: SupportedAngle): BoundaryCorners => {

	switch (angle) {
		case 45:
			return { begin: { x: 'right', y: 'top' }, end: { x: 'left', y: 'bottom' } }
		default: throw new Error('Unsupported angle')
	}
}


export const findAlignedElements = (startingElement: HasIdAndElementCoords, angle: SupportedAngle) => {

	return (otherElement: HasIdAndElementCoords) => {
		const { left: oeLeft, right: oeRight, top: oeTop, bottom: oeBottom } = otherElement

		if (angle.valueOf() === 90) {
			return isRangeOverlap(oeLeft + 1, oeRight - 1, startingElement.left + 1, startingElement.right - 1)
		}
		else if (angle.valueOf() === 0) {
			return isRangeOverlap(oeTop + 1, oeBottom - 1, startingElement.top + 1, startingElement.bottom - 1)
		}

		const { begin: { x: beginX, y: beginY }, end: { x: endX, y: endY } } = determineBoundaryCornersByAngle(angle)


		const boundaryBegin = getDiagonalBoundary({ x: startingElement[beginX] + 1, y: startingElement[beginY] + 1 }, angle)
		const boundaryEnd = getDiagonalBoundary({ x: startingElement[endX] - 1, y: startingElement[endY] - 1 }, angle)


		const boundaryBeginYAtElementXPosition = boundaryBegin.slope * oeRight + boundaryBegin.yIntercept
		const boundaryEndYAtElementXPosition = boundaryEnd.slope * oeLeft + boundaryEnd.yIntercept


		const thereIsYAlignment = isRangeOverlap(oeTop, oeBottom, boundaryBeginYAtElementXPosition, boundaryEndYAtElementXPosition)
		console.log('There is y alignment: ' + thereIsYAlignment);

		const boundaryBeginXAtElementYPosition = (oeTop - boundaryBegin.yIntercept) / boundaryBegin.slope
		const boundaryEndXAtElementYPosition = (oeBottom - boundaryEnd.yIntercept) / boundaryEnd.slope

		console.log(`otherElement left, right: ${oeLeft}, ${oeRight}`)
		console.log(`boundaries: ${boundaryBeginXAtElementYPosition}, ${boundaryEndXAtElementYPosition}`);

		const thereIsXAlignment = isRangeOverlap(oeLeft, oeRight, boundaryEndXAtElementYPosition, boundaryBeginXAtElementYPosition)
		console.log(thereIsXAlignment);

		return thereIsYAlignment && thereIsXAlignment
	}
}
