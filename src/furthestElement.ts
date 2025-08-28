import { getElementDistanceDirectional } from "./elementDistance"
import { Bearing, ElementWithAlignment, IsHtmlElementLike, Predicate } from "./types"

export const furthestElement = (startingElement: IsHtmlElementLike, otherElements: ElementWithAlignment[], bearing: keyof typeof Bearing, predicate?: Predicate): IsHtmlElementLike => {

	let elementsWithDistances =
		otherElements.filter(e => e.e.id !== startingElement.id).map(element => ({ ...getElementDistanceDirectional(startingElement, element, bearing) }))

	if (predicate) {
		elementsWithDistances = elementsWithDistances.filter(e => e.element.alignment > 0).map(e => ({ element: e.element, distance: e.distance + e.element.alignment }))
	}

	return elementsWithDistances.reduce((acc, curr) => curr.distance > acc.distance ? curr : acc).element.e
}
