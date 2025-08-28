import { findElements, validateArgs } from "./utilities"
import { type Options } from "./types"

export const closest = (args: Options) => {

	validateArgs(args)

	const { cssSelectorForTargetElements, bearing, startingElement, predicate: strategy } = args

	const viableElements = findElements(cssSelectorForTargetElements)



	return "foobarbazbingbong"
}

