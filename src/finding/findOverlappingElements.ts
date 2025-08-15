import { HasIdAndElementCoords } from "../types";

const haveColumnarOverlap = (startingElement: HasIdAndElementCoords, otherElement: HasIdAndElementCoords) => {
	const { left: otherLeft, right: otherRight } = otherElement.getBoundingClientRect()
	const { left: startingLeft, right: startingRight } = startingElement.getBoundingClientRect()

	const startingWidth = startingRight - startingLeft
	const otherWidth = otherRight - otherLeft

	const combinedHorizontalSpan = Math.abs(Math.min(startingLeft, otherLeft) - Math.max(startingRight, otherRight))

	const overLaps = startingWidth + otherWidth > combinedHorizontalSpan
	return overLaps

}

const haveRowOverlap = (startingElement: HasIdAndElementCoords, otherElement: HasIdAndElementCoords) => {
	const { top: otherTop, bottom: otherBottom } = otherElement.getBoundingClientRect()
	const { top: startingTop, bottom: startingBottom } = startingElement.getBoundingClientRect()

	const startingHeight = startingBottom - startingTop
	const otherHeight = otherBottom - otherTop

	const combinedVerticalSpan = Math.abs(Math.min(startingTop, otherTop) - Math.max(startingBottom, otherBottom))

	const overLaps = startingHeight + otherHeight > combinedVerticalSpan
	return overLaps
}

export const findOverlappingElements = (startingElement: HasIdAndElementCoords,
	otherElements: HasIdAndElementCoords[]): HasIdAndElementCoords[] => {

	const overlappingElements = otherElements.filter(otherElement => {
		const elementsHaveColumnarOverlap = haveColumnarOverlap(startingElement, otherElement)
		const elementsHaveRowOverlap = haveRowOverlap(startingElement, otherElement)
		return elementsHaveColumnarOverlap || elementsHaveRowOverlap
	}
	)

	return overlappingElements
}

