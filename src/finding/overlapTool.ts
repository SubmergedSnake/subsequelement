import { ImplementsGetBoundingClientRect } from "../types";
import { getBoundary } from "./ruler";
import { isRangeOverlap } from "range-overlap";

type BoundaryCorners = {
	begin: { x: 'left' | 'right', y: 'top' | 'bottom' }
	end: { x: 'left' | 'right', y: 'top' | 'bottom' }
}

type SupportedAngle = 0 | 45 | 90 | 135

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


export const elementsAreAligned = (startingPoint: ImplementsGetBoundingClientRect, otherElement: ImplementsGetBoundingClientRect, angle: number) => {
	const { left, right, top, bottom } = startingPoint.getBoundingClientRect()
	const { left: oeLeft, right: oeRight, top: oeTop, bottom: oeBottom } = otherElement.getBoundingClientRect()
	// The boundaries should be dynamically set using params!!!
	const boundaryBegin = getBoundary({ x: left, y: top }, angle)
	const boundaryEnd = getBoundary({ x: right, y: top }, angle)


	const boundaryBeginYAtElementXPosition = boundaryBegin.slope * oeLeft + boundaryBegin.yIntercept
	const boundaryEndYAtElementXPosition = boundaryEnd.slope * oeLeft + boundaryEnd.yIntercept


	const thereIsYOverlap = isRangeOverlap(oeTop, oeBottom, boundaryBeginYAtElementXPosition, boundaryEndYAtElementXPosition)

	const boundaryBeginXAtElementYPosition = (oeTop - boundaryBegin.yIntercept) / boundaryBegin.slope
	const boundaryEndXAtElementYPosition = (oeTop - boundaryEnd.yIntercept) / boundaryEnd.slope

	// console.log(`${boundaryBeginXAtElementYPosition}`);
	// console.log(`${boundaryEndXAtElementYPosition}`);
	// console.log(oeLeft);
	// console.log(oeRight);



	const thereIsXOverlap = isRangeOverlap(oeLeft, oeRight, boundaryBeginXAtElementYPosition, boundaryEndXAtElementYPosition)

	console.log(`there is x overlap: ${thereIsXOverlap}`)
	console.log(`there is y overlap: ${thereIsYOverlap}`)

	return thereIsYOverlap && thereIsXOverlap

}
