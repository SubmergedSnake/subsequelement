import { getTargetElements, validateSubsequelementArgs } from "./utilities"
import { HasToAlign, Bearing } from "./types"
import { nearestElement } from "./reducers/nearestElement"
import { absoluteFarthestElement } from "./reducers/absoluteFarthestElement"
import { getSubsequElements } from "./getSubsequElements"

export const near = (startingElement: Element, bearing: keyof typeof Bearing, selectors: string[], hasToAlign: HasToAlign = HasToAlign.ASMUCHASPOSSIBLE): Element | undefined => {

	validateSubsequelementArgs(startingElement, bearing, selectors)

	const targetElements = getTargetElements(selectors)

	if (targetElements.length === 0) {
		return undefined
	}

	const subs = getSubsequElements(startingElement, targetElements, bearing)
	return nearestElement(subs, hasToAlign)
}

export const far = (startingElement: Element, bearing: keyof typeof Bearing, selectors: string[], hasToAlign: HasToAlign = HasToAlign.ASMUCHASPOSSIBLE): Element | undefined => {

	validateSubsequelementArgs(startingElement, bearing, selectors)

	const targetElements = getTargetElements(selectors)

	if (targetElements.length === 0) {
		return undefined
	}

	const subs = getSubsequElements(startingElement, targetElements, bearing)

	if (hasToAlign == HasToAlign.NO) {
		return absoluteFarthestElement(subs)
	} else {
		let farthest: Element | undefined = undefined;
		let current = nearestElement(subs, hasToAlign);
		while (current !== undefined) {
			const nextSubs = getSubsequElements(current, subs.map(s => s.e), bearing)
			farthest = current;
			current = nearestElement(nextSubs, hasToAlign);
		}
		return farthest;
	}
}


