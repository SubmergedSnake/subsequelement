import { ImplementsGetBoundingClientRect } from "../types";
import { getLine } from "./ruler";

const rangesOverlap = (a1: number, a2: number, b1: number, b2: number) => {
	const overlap = (a1 >= b1 && a2 >= b2) || (a1 <= b1 && a2 <= b2) || (a1 >= b1 && a2 <= b2)
	return overlap
}

export const thereIsOverlap = (startingPoint: ImplementsGetBoundingClientRect, otherElement: ImplementsGetBoundingClientRect, angle: number) => {
	const { left, right, top, bottom } = startingPoint.getBoundingClientRect()
	const { left: oeLeft, right: oeRight, top: oeTop, bottom: oeBottom } = otherElement.getBoundingClientRect()
	const boundaryBegin = getLine({ x: left, y: top }, angle)
	const boundaryEnd = getLine({ x: left, y: bottom }, angle)


	const boundaryBeginYAtElementXPosition = boundaryBegin.slope * oeLeft + boundaryBegin.yIntercept
	const boundaryEndYAtElementXPosition = boundaryEnd.slope * oeLeft + boundaryEnd.yIntercept


	const thereIsYOverlap = rangesOverlap(oeTop, oeBottom, boundaryBeginYAtElementXPosition, boundaryEndYAtElementXPosition)

	const boundaryBeginXAtElementYPosition = (oeTop - boundaryBegin.yIntercept) / boundaryBegin.slope
	const boundaryEndXAtElementYPosition = (oeTop - boundaryEnd.yIntercept) / boundaryEnd.slope

	const thereIsXOverlap = rangesOverlap(oeLeft, oeRight, boundaryBeginXAtElementYPosition, boundaryEndXAtElementYPosition)

	console.log(`there is x overlap: ${thereIsXOverlap}`)

	return thereIsYOverlap

}
