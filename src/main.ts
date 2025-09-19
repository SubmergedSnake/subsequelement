import { getTargetElements, validateSubsequelementArgs } from "./utilities"
import { AlignmentOption, Bearing } from "./types"
import { nearestElement } from "./reducers/nearestElement"
import { farthestElement } from "./reducers/farthestElement"
import { getSubsequElements } from "./getSubsequElements"

export const near = (startingElement: Element, bearing: keyof typeof Bearing, selectors: string[], alignmentOption: AlignmentOption = 'preferred'): Element | undefined => {

	validateSubsequelementArgs(startingElement, bearing, selectors)

	const targetElements = getTargetElements(selectors)

	if (targetElements.length === 0) {
		return undefined
	}

	const subs = getSubsequElements(startingElement, targetElements, bearing)
	return nearestElement(subs, alignmentOption)
}

export const far = (startingElement: Element, bearing: keyof typeof Bearing, selectors: string[], alignmentOption: AlignmentOption = 'preferred'): Element | undefined => {

	validateSubsequelementArgs(startingElement, bearing, selectors)

	const targetElements = getTargetElements(selectors)

	if (targetElements.length === 0) {
		return undefined
	}

	const subs = getSubsequElements(startingElement, targetElements, bearing)
	return farthestElement(subs, alignmentOption)
}


