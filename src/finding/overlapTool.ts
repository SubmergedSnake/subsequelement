import { ImplementsGetBoundingClientRect } from "../types";
import { getLine } from "./ruler";
import { isRangeOverlap } from "range-overlap";

export const thereIsOverlap = (startingPoint: ImplementsGetBoundingClientRect, otherElement: ImplementsGetBoundingClientRect, angle: number) => {
	const { left, right, top, bottom } = startingPoint.getBoundingClientRect()
	const { left: oeLeft, right: oeRight, top: oeTop, bottom: oeBottom } = otherElement.getBoundingClientRect()
	// The boundaries should be dynamically set using params!!!
	const boundaryBegin = getLine({ x: left, y: top }, angle)
	const boundaryEnd = getLine({ x: right, y: top }, angle)


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
