import { filterByBearing } from "./bearing"
import { addAlignment } from "./helpers/getAlignment"
import { addProximity } from "./helpers/getProximity"
import { Bearing, IsHtmlElementLike } from "./types"

export const getSubsequelements = (startingElement: IsHtmlElementLike, otherElements: IsHtmlElementLike[], bearing: keyof typeof Bearing) => {
	return filterByBearing(startingElement, otherElements, bearing)
		.map(oe => addProximity(startingElement, oe))
		.map(oe => addAlignment(startingElement, oe, Bearing[bearing]))
}
