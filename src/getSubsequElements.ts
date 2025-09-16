import { filterByBearing } from "./filters/bearing"
import { addAlignment } from "./factors/alignment"
import { addOverlap } from "./factors/overlap"
import { addProximity } from "./factors/proximity"
import { Bearing, SubsequElement } from "./types"

export const getSubsequElements = (startingHTMLElement: HTMLElement, otherElements: HTMLElement[], bearing: keyof typeof Bearing): SubsequElement[] => {
	return filterByBearing(startingHTMLElement, otherElements, bearing)
		.map(oe => addProximity(startingHTMLElement, oe))
		.map(oe => addAlignment(startingHTMLElement, oe, Bearing[bearing]))
		.map(oe => addOverlap(startingHTMLElement, oe))
}
