import { findInDirection } from "./direction";
import { ClosestPoint, findClosestPointRelativeToStartingElement } from "./closestPoint";
import { HasIdAndElementCoords } from "../types";

import { Bearing } from "../types";

export const closestElement =
	(startingElement: HasIdAndElementCoords, otherElements: HasIdAndElementCoords[], direction: keyof typeof Bearing)
		: HasIdAndElementCoords => {

		let validElements = findInDirection(startingElement, otherElements, direction)

		const remainingElementsInDirection: (HasIdAndElementCoords & ClosestPoint)[] = validElements.map(e => ({ ...e, ...findClosestPointRelativeToStartingElement(startingElement, e) }))
		if (remainingElementsInDirection.length === 0) {
			let elementsInOppositeDirection = findInDirection(startingElement, otherElements, direction, 'reverse').map(e => ({ ...e, ...findClosestPointRelativeToStartingElement(startingElement, e) }))
			return elementsInOppositeDirection.reduce((acc, curr) => curr.distance > acc.distance ? curr : acc)
		}
		return remainingElementsInDirection.reduce((acc, curr) => curr.distance < acc.distance ? curr : acc)

	}
