import { HasToAlign, SubsequElement } from "../types"

export const farthestElement = (otherElements: SubsequElement[], hasToAlign: HasToAlign = HasToAlign.ASMUCHASPOSSIBLE): Element | undefined => {

	if (otherElements.length === 0) return undefined

	let farthestElement: Element | undefined

	switch (hasToAlign) {
		case HasToAlign.NO:
			farthestElement = otherElements.reduce((acc, curr) =>
				curr.proximity > acc.proximity ? curr : acc
			).e || undefined
			break;

		case HasToAlign.ASMUCHASPOSSIBLE:
			let alignmentThresholds = [0.5, 0, -0.5, -1, -1.5, -2, -2.5, -3, -4, -5]
			for (const threshold of alignmentThresholds) {
				const elementsWithinThreshold = otherElements.filter(e => e.alignment >= threshold)
				if (elementsWithinThreshold.length > 0) {
					farthestElement = elementsWithinThreshold.reduce((acc, curr) =>
						curr.proximity > acc.proximity || curr.proximity >= acc.proximity && curr.alignment > acc.alignment ? curr : acc
					).e
					break;
				}
			}
			if (!farthestElement) {
				farthestElement = otherElements.filter(e => e.alignment < -5).reduce((acc, curr) =>
					curr.proximity > acc.proximity || curr.proximity >= acc.proximity && curr.alignment > acc.alignment ? curr : acc
				).e
			}
			break;

		case HasToAlign.YES:
			const elementsWithAlignment = otherElements.filter(e => e.alignment > 0)
			if (elementsWithAlignment.length > 0) {
				farthestElement = otherElements.filter(e => e.alignment > 0).reduce((acc, curr) =>
					curr.proximity > acc.proximity || curr.proximity >= acc.proximity && curr.alignment > acc.alignment ? curr : acc
				).e || undefined
			} else {
				farthestElement = undefined
			}
			break;

		default:
			farthestElement = undefined
			break;
	}
	return farthestElement
}
