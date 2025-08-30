import { validateOptions } from "./utilities"
import { Bearing, IsHtmlElementLike, SupportedAngle, type Options } from "./types"
import { getElementsInDirection } from "./direction"
import { getAlignmentIndexForElements } from "./helpers/alignmentIndex"
import { closestElement2 } from "./proximity/closestElement2"
import { furthestElement } from "./proximity/furthestElement"

export const closest = (options: Options): IsHtmlElementLike | undefined => {
	const { cssSelectorForTargetElements, bearing, startingElement, predicate } = validateOptions(options)

	const targetElements = Array.from(document.querySelectorAll(cssSelectorForTargetElements))
	if (targetElements.length === 0) {
		return undefined
	}
	const elementsInDirection = getElementsInDirection(startingElement, targetElements, bearing)
	const elementsWithAlignmentIndex = getAlignmentIndexForElements(startingElement, elementsInDirection, Bearing[bearing] as SupportedAngle)
	const element = closestElement2(startingElement, elementsWithAlignmentIndex, bearing, predicate)

	return element
}

export const furthest = (options: Options): IsHtmlElementLike => {
	const { cssSelectorForTargetElements, bearing, startingElement, predicate } = validateOptions(options)

	const targetElements = Array.from(document.querySelectorAll(cssSelectorForTargetElements))
	const elementsInDirection = getElementsInDirection(startingElement, targetElements, bearing)
	const elementsWithAlignment = getAlignmentIndexForElements(startingElement, elementsInDirection, Bearing[bearing])
	const element = furthestElement(startingElement, elementsWithAlignment, bearing, predicate)

	return element
}

export * as subsequelement from './subsequelement'
