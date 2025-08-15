import { findInDirection } from "./findByDirection";
import { ClosestPoint, findClosestPointRelativeToStartingElement } from "./findClosestPointRelativeToStartingElement";
import { findOverlappingElements } from "./findOverlappingElements";
import { Direction, HasIdAndElementCoords, Strategy } from "../types";
import { getNewStartingPoint } from "./getNewStartingPoint";

export const findClosestElement =
	(startingElement: HasIdAndElementCoords, otherElements: HasIdAndElementCoords[], direction: Direction, strategy: Strategy)
		: HasIdAndElementCoords => {

		let validElements

		if (strategy === Strategy.STRICT) {
			validElements = findOverlappingElements(startingElement, otherElements)
		} else {
			validElements = otherElements
		}

		const elementsInDirection = findInDirection(startingElement, validElements, direction)

		let elementsWithDistances: (HasIdAndElementCoords & ClosestPoint)[] = elementsInDirection.map(e => ({ ...e, ...findClosestPointRelativeToStartingElement(startingElement, e) }))
		if (elementsWithDistances.length === 0) {
			const phantomElement = getNewStartingPoint(startingElement, elementsInDirection, direction)
			elementsWithDistances = elementsInDirection.map(e => ({ ...e, ...findClosestPointRelativeToStartingElement(phantomElement, e) }))
		}
		return elementsWithDistances.reduce((acc, curr) => curr.distance < acc.distance ? curr : acc)

	}
