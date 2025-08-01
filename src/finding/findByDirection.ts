import { ImplementsGetBoundingClientRect } from "../types"

export const findNorth = (startingElement: ImplementsGetBoundingClientRect, otherElements: ImplementsGetBoundingClientRect[]): ImplementsGetBoundingClientRect[] => {
	return otherElements.filter(oe => oe.getBoundingClientRect().bottom <= startingElement.getBoundingClientRect().top)
}

export const findNorthEast = (startingElement: ImplementsGetBoundingClientRect, otherElements: ImplementsGetBoundingClientRect[]): ImplementsGetBoundingClientRect[] => {
	return otherElements.filter(oe => oe.getBoundingClientRect().bottom <= startingElement.getBoundingClientRect().top
		&& oe.getBoundingClientRect().left >= startingElement.getBoundingClientRect().right)
}

export const findEast = (startingElement: ImplementsGetBoundingClientRect, otherElements: ImplementsGetBoundingClientRect[]): ImplementsGetBoundingClientRect[] => {
	return otherElements.filter(oe => oe.getBoundingClientRect().left >= startingElement.getBoundingClientRect().right)
}

export const findSouthEast = (startingElement: ImplementsGetBoundingClientRect, otherElements: ImplementsGetBoundingClientRect[]): ImplementsGetBoundingClientRect[] => {
	return otherElements.filter(oe => oe.getBoundingClientRect().left >= startingElement.getBoundingClientRect().right &&
		oe.getBoundingClientRect().top >= startingElement.getBoundingClientRect().bottom)
}

export const findSouth = (startingElement: ImplementsGetBoundingClientRect, otherElements: ImplementsGetBoundingClientRect[]): ImplementsGetBoundingClientRect[] => {
	return otherElements.filter(oe => oe.getBoundingClientRect().top >= startingElement.getBoundingClientRect().bottom)
}

export const findSouthWest = (startingElement: ImplementsGetBoundingClientRect, otherElements: ImplementsGetBoundingClientRect[]): ImplementsGetBoundingClientRect[] => {
	return otherElements.filter(oe => oe.getBoundingClientRect().top >= startingElement.getBoundingClientRect().bottom &&
		oe.getBoundingClientRect().right <= startingElement.getBoundingClientRect().left)
}

export const findWest = (startingElement: ImplementsGetBoundingClientRect, otherElements: ImplementsGetBoundingClientRect[]): ImplementsGetBoundingClientRect[] => {
	return otherElements.filter(oe => oe.getBoundingClientRect().right <= startingElement.getBoundingClientRect().left)
}

export const findNorthWest = (startingElement: ImplementsGetBoundingClientRect, otherElements: ImplementsGetBoundingClientRect[]): ImplementsGetBoundingClientRect[] => {
	return otherElements.filter(oe => oe.getBoundingClientRect().right <= startingElement.getBoundingClientRect().left &&
		oe.getBoundingClientRect().bottom <= startingElement.getBoundingClientRect().top
	)
}




