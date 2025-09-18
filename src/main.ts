import { getTargetElements, validateSubsequelementArgs } from "./utilities"
import { Bearing } from "./types"
import { nearestElement } from "./reducers/nearestElement"
import { farthestElement } from "./reducers/farthestElement"
import { getSubsequElements } from "./getSubsequElements"

export const near = (startingElement: Element, bearing: keyof typeof Bearing, selectors: string[], preferAlignment: boolean = true): Element | undefined => {

	validateSubsequelementArgs(startingElement, bearing, selectors)

	const targetElements = getTargetElements(selectors)

	if (targetElements.length === 0) {
		return undefined
	}

	const subs = getSubsequElements(startingElement, targetElements, bearing)
	return nearestElement(subs, preferAlignment)
}

export const far = (startingElement: Element, bearing: keyof typeof Bearing, selectors: string[], preferAlignment: boolean = true): Element | undefined => {

	validateSubsequelementArgs(startingElement, bearing, selectors)

	const targetElements = getTargetElements(selectors)

	if (targetElements.length === 0) {
		return undefined
	}

	const subs = getSubsequElements(startingElement, targetElements, bearing)
	return farthestElement(subs, preferAlignment)
}


