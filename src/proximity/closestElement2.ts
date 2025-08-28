import { getElementDistanceDirectional } from "../helpers/elementDistance";
import { ElementWithAlignment, IsHtmlElementLike, Bearing, Predicate } from "../types";

export const closestElement2 =
	(startingElement: IsHtmlElementLike, otherElements: ElementWithAlignment[], bearing: keyof typeof Bearing, predicate?: Predicate)
		: IsHtmlElementLike => {

		let elementsWithDistances =
			otherElements.filter(e => e.e.id !== startingElement.id).map(element => ({ ...getElementDistanceDirectional(startingElement, element, bearing) }))
		if (predicate) {
			elementsWithDistances = elementsWithDistances.map(e => ({ element: e.element, distance: e.distance - e.element.alignment }))
		}

		return elementsWithDistances.reduce((acc, curr) => curr.distance < acc.distance ? curr : acc).element.e
	}
