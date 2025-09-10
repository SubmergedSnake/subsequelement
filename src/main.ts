import { validateSubsequelementArgs } from "./utilities"
import { Bearing, IsHtmlElementLike, Options } from "./types"
import { closestElement2 } from "./proximity/closestElement2"
import { furthestElement } from "./proximity/furthestElement"
import { getSubsequelements } from "./getsubsequelements"

export const closest = (startingElement: IsHtmlElementLike, bearing: keyof typeof Bearing, options?: Options): IsHtmlElementLike | undefined => {
	validateSubsequelementArgs(startingElement, bearing, options)

	const selectors = Array.isArray(options?.selectors) && options.selectors.length > 0
		? options.selectors
		: ['body *'];

	const targetElements = selectors.flatMap(selector => Array.from(document.querySelectorAll(selector) || []));

	if (targetElements.length === 0) {
		return undefined
	}

	const subs = getSubsequelements(startingElement, targetElements, bearing)

	const element = closestElement2(subs, options?.preferAlignment)

	return element
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
	const subs = getSubsequelements(startingElement, targetElements, bearing)

	const element = furthestElement(subs, options?.preferAlignment)

	return element
}


