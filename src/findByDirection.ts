import { ImplementsGetBoundingClientRect } from "./types";

export const findRight = (startingElement: ImplementsGetBoundingClientRect, otherElements: ImplementsGetBoundingClientRect[]): ImplementsGetBoundingClientRect[] => {
	return otherElements.filter(oe => oe.getBoundingClientRect().left >= startingElement.getBoundingClientRect().right)
}

export const findLeft = (startingElement: ImplementsGetBoundingClientRect, otherElements: ImplementsGetBoundingClientRect[]): ImplementsGetBoundingClientRect[] => {
	return otherElements.filter(oe => oe.getBoundingClientRect().right <= startingElement.getBoundingClientRect().left)
}

export const findBelow = (startingElement: ImplementsGetBoundingClientRect, otherElements: ImplementsGetBoundingClientRect[]): ImplementsGetBoundingClientRect[] => {
	return otherElements.filter(oe => oe.getBoundingClientRect().top >= startingElement.getBoundingClientRect().bottom)
}

export const findAbove = (startingElement: ImplementsGetBoundingClientRect, otherElements: ImplementsGetBoundingClientRect[]): ImplementsGetBoundingClientRect[] => {
	return otherElements.filter(oe => oe.getBoundingClientRect().bottom <= startingElement.getBoundingClientRect().top)
}
