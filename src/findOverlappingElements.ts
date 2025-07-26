import { ImplementsGetBoundingClientRect } from "./types";

export const findOverlappingElements = <T extends ImplementsGetBoundingClientRect>(startingElement: T,
	otherElements: T[]): T[] => {
	const overlappingElements = otherElements.filter(otherElement => {

		const { left: startingLeft, top: startingTop, right: startingRight, bottom: startingBottom }
			= startingElement.getBoundingClientRect()

		const { left: otherLeft, top: otherTop, right: otherRight, bottom: otherBottom }
			= otherElement.getBoundingClientRect()

		return otherLeft >= startingLeft && otherLeft < startingRight
			||
			otherRight <= startingRight && otherRight > startingLeft
			||
			otherTop >= startingTop && otherTop > startingBottom
			||
			otherBottom >= startingBottom && otherBottom < startingTop

	}
	)

	return overlappingElements
}

