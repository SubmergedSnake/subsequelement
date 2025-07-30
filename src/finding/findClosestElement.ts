import { findAbove, findBelow, findLeft, findRight } from "./findByDirection";
import { ClosestPoint, findClosestPointRelativeToStartingElement } from "./findClosestPointRelativeToStartingElement";
import { findOverlappingElements } from "./findOverlappingElements";
import { Direction, ImplementsGetBoundingClientRect, Strategy } from "../types";
import { getNewStartingPoint } from "./getNewStartingPoint";

export const findClosestElement =
	(startingElement: ImplementsGetBoundingClientRect, otherElements: ImplementsGetBoundingClientRect[], direction: Direction, strategy: Strategy)
		: ImplementsGetBoundingClientRect => {

		let validElements

		if (strategy === Strategy.STRICT) {
			validElements = findOverlappingElements(startingElement, otherElements)
		} else {
			validElements = otherElements
		}

		switch (direction) {
			case Direction.UP:
				validElements = findAbove(startingElement, validElements)
				break;
			case Direction.DOWN:
				validElements = findBelow(startingElement, validElements)
				break;
			case Direction.RIGHT:
				validElements = findRight(startingElement, validElements)
				break;
			case Direction.LEFT:
				validElements = findLeft(startingElement, validElements)
				break;
		}

		let elementsWithDistances: (ImplementsGetBoundingClientRect & ClosestPoint)[] = validElements.map(e => ({ ...e, ...findClosestPointRelativeToStartingElement(startingElement, e) }))
		if (elementsWithDistances.length === 0) {
			const phantomElement = getNewStartingPoint(startingElement, validElements, direction)
			elementsWithDistances = validElements.map(e => ({ ...e, ...findClosestPointRelativeToStartingElement(phantomElement, e) }))
		}
		return elementsWithDistances.reduce((acc, curr) => curr.distance < acc.distance ? curr : acc)

	}
