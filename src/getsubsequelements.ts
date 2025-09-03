import { filterByBearing } from "./bearing"
import { getAlignment } from "./helpers/getAlignment"
import { getProximity } from "./helpers/getProximity"
import { Bearing, IsHtmlElementLike } from "./types"

export const getSubsequelements = (startingElement: IsHtmlElementLike, otherElements: IsHtmlElementLike[], bearing: keyof typeof Bearing) => {
	return filterByBearing(startingElement, otherElements, bearing)
		.map(oe => getProximity(startingElement, oe))
		.map(oe => getAlignment(startingElement, oe, Bearing[bearing]))
}
