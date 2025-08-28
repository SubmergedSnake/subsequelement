import { getElementDistanceDirectional } from "./elementDistance"
import { Bearing, ElementWithAlignment, IsHtmlElementLike } from "./types"

export const furthestElement = (startingElement: IsHtmlElementLike, otherElements: ElementWithAlignment[], bearing: keyof typeof Bearing, considerAlignment: { strict: boolean } | null = null): IsHtmlElementLike => {

	let elementsWithDistances =
		otherElements.filter(e => e.e.id !== startingElement.id).map(element => ({ ...getElementDistanceDirectional(startingElement, element, bearing) }))

	if (considerAlignment) {
		if (considerAlignment.strict) {
			elementsWithDistances = elementsWithDistances.filter(e => e.element.alignment > 0).map(e => ({ element: e.element, distance: e.distance + e.element.alignment }))
		} else {
			elementsWithDistances = elementsWithDistances.map(e => ({ element: e.element, distance: e.distance - e.element.alignment }))
		}
	}

	return elementsWithDistances.reduce((acc, curr) => curr.distance > acc.distance ? curr : acc).element.e
}
