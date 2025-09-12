import { filterByBearing } from "./filters/bearing"
import { addAlignment } from "./factors/alignment"
import { addOverlap } from "./factors/overlap"
import { addProximity } from "./factors/proximity"
import { Bearing, IsHtmlElementLike, SubsequElement } from "./types"

export const getSubsequElements = (startingElement: IsHtmlElementLike, otherElements: IsHtmlElementLike[], bearing: keyof typeof Bearing): SubsequElement[] => {
	return filterByBearing(startingElement, otherElements, bearing)
		.map(oe => addProximity(startingElement, oe))
		.map(oe => addAlignment(startingElement, oe, Bearing[bearing]))
		.map(oe => addOverlap(startingElement, oe))
}
