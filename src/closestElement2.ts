import { getElementDistanceDirectional  } from "./elementDistance";
import { ElementWithAlignment, IsHtmlElementLike, Bearing } from "./types";


export const closestElement2 =
	(startingElement: IsHtmlElementLike, otherElements: ElementWithAlignment[], bearing: keyof typeof Bearing, considerAlignment: { strict: boolean } | null = null)
		: IsHtmlElementLike => {


		let elementsWithDistances =
			otherElements.map(element => ({ ...getElementDistanceDirectional(startingElement, element, bearing) }))
		if (considerAlignment) {
			if (considerAlignment.strict) {
				console.log('considering alignment, being strict about it')
				elementsWithDistances = elementsWithDistances.filter(e => e.element.alignment > 0).map(e => ({ element: e.element, distance: e.distance - e.element.alignment }))
			} else {
				console.log('considering alignment, being lenient')
				elementsWithDistances = elementsWithDistances.map(e => ({ element: e.element, distance: e.distance - e.element.alignment }))
			}
		}

		return elementsWithDistances.reduce((acc, curr) => curr.distance < acc.distance ? curr : acc).element.e

	}


