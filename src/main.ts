import { validateSubsequelementArgs } from "./utilities"
import { Bearing, IsHtmlElementLike, Options } from "./types"
import { closestElement } from "./reducers/closestElement"
import { furthestElement } from "./reducers/furthestElement"
import { getSubsequElements } from "./getSubsequElements"

export const closest = (startingElement: IsHtmlElementLike, bearing: keyof typeof Bearing, options?: Options): IsHtmlElementLike | undefined => {
	validateSubsequelementArgs(startingElement, bearing, options)

	const selectors = Array.isArray(options?.selectors) && options.selectors.length > 0
		? options.selectors
		: ['body *'];

	const targetElements = selectors.flatMap(selector => Array.from(document.querySelectorAll(selector) || []));

	if (targetElements.length === 0) {
		return undefined
	}

	const subs = getSubsequElements(startingElement, targetElements, bearing)
	return closestElement(subs, options?.preferAlignment)
}

export const furthest = (startingElement: IsHtmlElementLike, bearing: keyof typeof Bearing, options?: Options): IsHtmlElementLike | undefined => {
	validateSubsequelementArgs(startingElement, bearing, options)

	const selectors = Array.isArray(options?.selectors) && options.selectors.length > 0
		? options.selectors
		: ['body *'];

	const targetElements = selectors.flatMap(selector => Array.from(document.querySelectorAll(selector) || []));

	if (targetElements.length === 0) {
		return undefined
	}

	const subs = getSubsequElements(startingElement, targetElements, bearing)
	return furthestElement(subs, options?.preferAlignment)
}


