import { findInDirection } from "./direction";
import { ClosestPoint, findClosestPointRelativeToStartingElement } from "./closestPoint";
import { HasIdAndElementCoords, Strategy, SupportedAngle } from "../types";
import { getNewStartingPoint } from "./getNewStartingPoint";
import { findAlignedElements } from "./alignment";

import { Bearing } from "../types";

export const closest =
	(startingElement: HasIdAndElementCoords, otherElements: HasIdAndElementCoords[], direction: keyof typeof Bearing, strategy: Strategy)
		: HasIdAndElementCoords => {

		let validElements = findInDirection(startingElement, otherElements, direction)

		if (strategy === Strategy.STRICT) {
			validElements = validElements.filter(findAlignedElements(startingElement, Bearing[direction] as SupportedAngle))
		}


		let elementsWithDistances: (HasIdAndElementCoords & ClosestPoint)[] = validElements.map(e => ({ ...e, ...findClosestPointRelativeToStartingElement(startingElement, e) }))
		if (elementsWithDistances.length === 0) {
			const phantomElement = getNewStartingPoint(startingElement, validElements, direction)
			elementsWithDistances = validElements.map(e => ({ ...e, ...findClosestPointRelativeToStartingElement(phantomElement, e) }))
		}
		return elementsWithDistances.reduce((acc, curr) => curr.distance < acc.distance ? curr : acc)

	}
