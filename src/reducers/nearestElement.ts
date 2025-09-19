import { HasToAlign, HasOverlap, SubsequElement } from "../types";

export const nearestElement =
	(otherElements: SubsequElement[], hasToAlign: HasToAlign = HasToAlign.ASMUCHASPOSSIBLE)
		: Element | undefined => {

		if (otherElements.length === 0) return undefined

		const overlappingElements = otherElements.filter((oe): oe is HasOverlap => !!oe.overlap)

		const mostOverlappingElement = overlappingElements.length > 0 ? overlappingElements.reduce((acc, curr) =>
			curr.overlap > acc.overlap ? curr : acc
		).e : undefined

		if (mostOverlappingElement !== undefined) {
			return mostOverlappingElement
		}

		let nearestElement: Element | undefined
		switch (hasToAlign) {
			case HasToAlign.NO:
				nearestElement = otherElements.reduce((acc, curr) =>
					curr.proximity < acc.proximity ? curr : acc
				).e
				break;

			case HasToAlign.ASMUCHASPOSSIBLE:
				let aligmentThresholds = [0.5, 0, -1, -2, -3, -4, -5]
				for (const threshold of aligmentThresholds) {
					const elementsWithinThreshold = otherElements.filter(e => e.alignment >= threshold)

					if (elementsWithinThreshold.length > 0) {
						nearestElement = elementsWithinThreshold.reduce((acc, curr) =>
							curr.proximity < acc.proximity || curr.proximity <= acc.proximity && curr.alignment > acc.alignment ? curr : acc
						).e
						break;
					}
				}
				if (!nearestElement) {
					nearestElement = otherElements.filter(e => e.alignment < -5).reduce((acc, curr) =>
						curr.proximity < acc.proximity || curr.proximity <= acc.proximity && curr.alignment > acc.alignment ? curr : acc
					).e
				}
				break;

			case HasToAlign.YES:
				const elementsWithAlignment = otherElements.filter(e => e.alignment > 0)
				if (elementsWithAlignment.length > 0) {
					nearestElement = elementsWithAlignment.reduce((acc, curr) =>
						curr.proximity < acc.proximity || curr.proximity <= acc.proximity && curr.alignment > acc.alignment ? curr : acc
					).e
				} else {
					nearestElement = undefined
				}
				break;

			default:
				nearestElement = undefined
				break;
		}

		return nearestElement
	}
