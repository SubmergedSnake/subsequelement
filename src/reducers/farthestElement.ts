import { SubsequElement } from "../types"

export const farthestElement = (otherElements: SubsequElement[], preferAlignment: boolean = true): Element | undefined => {

	if (otherElements.length === 0) return undefined

	if (preferAlignment) {
		let alignmentThresholds = [0.5, 0, -0.5, -1, -1.5, -2, -2.5, -3, -4, -5]
		for (const threshold of alignmentThresholds) {
			const elementsWithinThreshold = otherElements.filter(e => e.alignment >= threshold)
			if (elementsWithinThreshold.length > 0) {
				return elementsWithinThreshold.reduce((acc, curr) =>
					curr.proximity > acc.proximity ? curr : acc
				).e
			}
		}
	} else {
		return otherElements.reduce((acc, curr) =>
			curr.proximity > acc.proximity ? curr : acc
		).e || undefined
	}
}
