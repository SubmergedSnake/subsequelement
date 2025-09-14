import { getTargetElements, validateSubsequelementArgs } from "./utilities"
import { Bearing } from "./types"
import { closestElement } from "./reducers/closestElement"
import { furthestElement } from "./reducers/furthestElement"
import { getSubsequElements } from "./getSubsequElements"

export const closest = (startingElement: Element, bearing: keyof typeof Bearing, selectors: string[] | undefined = undefined, preferAlignment: boolean = true): Element | undefined => {

	validateSubsequelementArgs(startingElement, bearing, selectors)

	const targetElements = getTargetElements(selectors)

	if (targetElements.length === 0) {
		return undefined
	}

	const subs = getSubsequElements(startingElement, targetElements, bearing)
	return closestElement(subs, preferAlignment)
}

export const furthest = (startingElement: Element, bearing: keyof typeof Bearing, selectors: string[] | undefined = undefined, preferAlignment: boolean = true): Element | undefined => {

	validateSubsequelementArgs(startingElement, bearing, selectors)

	const targetElements = getTargetElements(selectors)

	if (targetElements.length === 0) {
		return undefined
	}

	const subs = getSubsequElements(startingElement, targetElements, bearing)
	return furthestElement(subs, preferAlignment)
}


