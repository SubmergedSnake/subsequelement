import { filterByBearing } from "./filters/bearing"
import { addAlignment } from "./factors/alignment"
import { addOverlap } from "./factors/overlap"
import { addProximity } from "./factors/proximity"
import { Bearing, SubsequElement } from "./types"

export const getSubsequElements = (startingHTMLElement: HTMLElement, otherHTMLElements: HTMLElement[], bearing: keyof typeof Bearing): SubsequElement[] => {
	return filterByBearing(startingHTMLElement, otherHTMLElements, bearing)
		.map(oe => addProximity(startingHTMLElement, oe, bearing))
		.map(oe => addAlignment(startingHTMLElement, oe, Bearing[bearing]))
		.map(oe => addOverlap(startingHTMLElement, oe))
}
