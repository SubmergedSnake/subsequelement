import { HasOverlap, SubsequElement } from "../types";

export const nearestElement =
	(otherElements: SubsequElement[], preferAlignment: boolean = true)
		: HTMLElement | undefined => {

		if (otherElements.length === 0) return undefined

		const overlappingElements = otherElements.filter((oe): oe is HasOverlap => !!oe.overlap)

		const mostOverlappingElement = overlappingElements.length > 0 ? overlappingElements.reduce((acc, curr) =>
			curr.overlap > acc.overlap ? curr : acc
		).e : undefined

		if (mostOverlappingElement !== undefined) {
			return mostOverlappingElement
		}


		if (preferAlignment) {
			let aligmentThresholds = [0.5, 0, -1, -2, -3, -4, -5]
			for (const threshold of aligmentThresholds) {
				const elementsWithinThreshold = otherElements.filter(e => e.alignment >= threshold)
				if (elementsWithinThreshold.length > 0) {
					return elementsWithinThreshold.reduce((acc, curr) =>
						curr.proximity < acc.proximity ? curr : acc
					).e
				}
			}
		} else {
			return otherElements.reduce((acc, curr) =>
				curr.proximity < acc.proximity ? curr : acc
			).e || undefined
		}
	}
