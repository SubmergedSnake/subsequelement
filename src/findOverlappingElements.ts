import { ImplementsGetBoundingClientRect } from "./types";

const haveVerticalOverlap = (startingElementRange: { left: number, right: number }, otherElementRange: { left: number, right: number }) =>
	startingElementRange.left >= otherElementRange.left && startingElementRange.right <= otherElementRange.right;

const haveHorizontalOverlap = (startingElementRange: { top: number, bottom: number }, otherElementRange: { top: number, bottom: number }) =>
	startingElementRange.top >= otherElementRange.top && startingElementRange.bottom <= otherElementRange.bottom;

export const findOverlappingElements = (startingElement: ImplementsGetBoundingClientRect,
	otherElements: ImplementsGetBoundingClientRect[]): ImplementsGetBoundingClientRect[] => {

	const { left: startingLeft, top: startingTop, right: startingRight, bottom: startingBottom }
		= startingElement.getBoundingClientRect()

	const overlappingElements = otherElements.filter(otherElement => {

		const { left: otherLeft, top: otherTop, right: otherRight, bottom: otherBottom }
			= otherElement.getBoundingClientRect()

		const elementsOverlapVertically = haveVerticalOverlap({ left: startingLeft, right: startingRight }, { left: otherLeft, right: otherRight })
		const elementsOverlapHorizontally = haveHorizontalOverlap({ top: startingTop, bottom: startingBottom }, { top: otherTop, bottom: otherBottom })


		return elementsOverlapVertically || elementsOverlapHorizontally

	}
	)

	return overlappingElements
}

