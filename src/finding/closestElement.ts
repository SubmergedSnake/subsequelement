import { findInDirection } from "./direction";
import { ClosestPoint, findClosestPointRelativeToStartingElement } from "./closestPoint";
import { HasIdAndElementCoords, Strategy, SupportedAngle } from "../types";
import { findAlignedElements } from "./alignment";

import { Bearing } from "../types";

export const closestElement =
	(startingElement: HasIdAndElementCoords, otherElements: HasIdAndElementCoords[], direction: keyof typeof Bearing, strategy: Strategy)
		: HasIdAndElementCoords => {

		let validElements = findInDirection(startingElement, otherElements, direction)

		if (strategy === Strategy.STRICT) {
			validElements = validElements.filter(findAlignedElements(startingElement, Bearing[direction] as SupportedAngle))
		}

		const remainingElementsInDirection: (HasIdAndElementCoords & ClosestPoint)[] = validElements.map(e => ({ ...e, ...findClosestPointRelativeToStartingElement(startingElement, e) }))
		if (remainingElementsInDirection.length === 0) {
			let elementsInOppositeDirection = findInDirection(startingElement, otherElements, direction, true).map(e => ({ ...e, ...findClosestPointRelativeToStartingElement(startingElement, e) }))
			if (strategy === Strategy.STRICT) {
				elementsInOppositeDirection = elementsInOppositeDirection.filter(findAlignedElements(startingElement, Bearing[direction] as SupportedAngle))
			}
			return elementsInOppositeDirection.reduce((acc, curr) => curr.distance > acc.distance ? curr : acc)
		}
		return remainingElementsInDirection.reduce((acc, curr) => curr.distance < acc.distance ? curr : acc)

	}
