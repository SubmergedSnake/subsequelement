import { Subsequelement } from "../Subsequelement";
import { IsHtmlElementLike } from "../types";

export const closestElement2 =
	(otherElements: Subsequelement[], preferAlignment: boolean = true)
		: IsHtmlElementLike | undefined => {

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
