import { HasOverlap, SubsequElement } from "../types"

export const farthestElement = (otherHTMLElements: SubsequElement[], preferAlignment: boolean = true): HTMLElement | undefined => {

	// const overlappingElements = otherHTMLElements.filter((oe): oe is HasOverlap => !!oe.overlap)
	//
	// const leastOverlappingElement = overlappingElements.length ? overlappingElements.reduce((acc, curr) =>
	// 	curr.overlap < acc.overlap ? curr : acc
	// ).e : undefined
	//
	// if (leastOverlappingElement) {
	// 	return leastOverlappingElement
	// }

	if (otherHTMLElements.length === 0) return undefined

	if (preferAlignment) {
		let aligmentThresholds = [0.5, 0, -0.5, -1, -1.5, -2, -2.5, -3, -4, -5]
		for (const threshold of aligmentThresholds) {
			const elementsWithinThreshold = otherHTMLElements.filter(e => e.alignment >= threshold)
			if (elementsWithinThreshold.length > 0) {
				return elementsWithinThreshold.reduce((acc, curr) =>
					curr.proximity > acc.proximity ? curr : acc
				).e
			}
		}
	} else {
		return otherHTMLElements.reduce((acc, curr) =>
			curr.proximity > acc.proximity ? curr : acc
		).e || undefined
	}
}
