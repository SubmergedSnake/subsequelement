import { findInDirection } from "./direction";
import { getElementDistance } from "./closestPoint";
import { HasIdAndElementCoords } from "../types";

import { Bearing } from "../types";

const furthest = (direction: keyof typeof Bearing, startingElement: HasIdAndElementCoords, otherElements: HasIdAndElementCoords[]): HasIdAndElementCoords => {

	const elementsWithOffsets = otherElements.map(e => (
		{
			e,
			x: Math.abs(Math.abs(startingElement.x) - Math.abs(e.x)),
			y: Math.abs(Math.abs(startingElement.y) - Math.abs(e.y))
		}
	)
	)

	if (['w', 'e'].includes(direction)) {
		return elementsWithOffsets.reduce((acc, curr) => curr.x > acc.x || curr.y < acc.y && curr.x >= acc.x ? curr : acc).e
	} else if (['n', 's'].includes(direction)) {
		return elementsWithOffsets.reduce((acc, curr) => curr.y > acc.y || curr.x < acc.x && curr.y >= acc.y ? curr : acc).e
	} else {
		return elementsWithOffsets.reduce((acc, curr) => curr.x >= acc.x && curr.y >= acc.y ? curr : acc).e
	}
}

export const closestElement =
	(startingElement: HasIdAndElementCoords, otherElements: HasIdAndElementCoords[], direction: keyof typeof Bearing)
		: HasIdAndElementCoords => {
		console.log(otherElements)

		const remainingElementsInDirection: { element: HasIdAndElementCoords, distance: number }[] =
			findInDirection(startingElement, otherElements, direction)
				.map(e => ({ ...getElementDistance(startingElement, e) }))

		if (remainingElementsInDirection.length === 0) {
			let elementsInOppositeDirection = findInDirection(startingElement, otherElements, direction, 'reverse')
			return furthest(direction, startingElement, elementsInOppositeDirection)
		}
		return remainingElementsInDirection.reduce((acc, curr) => curr.distance < acc.distance ? curr : acc).element

	}
