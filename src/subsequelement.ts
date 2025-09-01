import { validateSubsequelementArgs } from "./utilities"
import { Bearing, IsHtmlElementLike, Options, SupportedAngle } from "./types"
import { getElementsInDirection } from "./direction"
import { getAlignmentIndexForElements } from "./helpers/alignmentIndex"
import { closestElement2 } from "./proximity/closestElement2"
import { furthestElement } from "./proximity/furthestElement"

export const closest = (startingElement: IsHtmlElementLike, bearing: keyof typeof Bearing, options?: Options): IsHtmlElementLike | undefined => {
	validateSubsequelementArgs(startingElement, bearing, options)

	const selectors = Array.isArray(options?.selectors) && options.selectors.length > 0
		? options.selectors
		: ['body *'];

	const targetElements = selectors.flatMap(selector => Array.from(document.querySelectorAll(selector) || []));

	if (targetElements.length === 0) {
		return undefined
	}
	const elementsInDirection = getElementsInDirection(startingElement, targetElements, bearing)
	const elementsWithAlignmentIndex = getAlignmentIndexForElements(startingElement, elementsInDirection, Bearing[bearing] as SupportedAngle)
	const element = closestElement2(startingElement, elementsWithAlignmentIndex, bearing, options?.emphasizeAlign)

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

	const elementsInDirection = getElementsInDirection(startingElement, targetElements, bearing)
	const elementsWithAlignment = getAlignmentIndexForElements(startingElement, elementsInDirection, Bearing[bearing])
	const element = furthestElement(startingElement, elementsWithAlignment, bearing, options?.emphasizeAlign)

	return element
}

export * as subsequelement from './subsequelement'
