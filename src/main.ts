import { findElements, omitStartingElement, validateArgs } from "./utilities"
import { type Options } from "./types"

export const adjaycent = (args: Options) => {

	validateArgs(args)

	const { cssSelectorForTargetElements, bearing, startingElement, strategy } = args

	const viableElements = findElements(cssSelectorForTargetElements)

	const otherElements = omitStartingElement(startingElement, viableElements)


	return "foobarbazbingbong"

	/* Filter elements according to strategy
	 * 
	 * If 'strict', consider only elements whose dimensions overlap on
	 * - the y-axis, when going up or down
	 * - the x-axis, when going left or right
	 *
	 */


	// Filter elements to retain only those that are in the direction we are interested in

	/* Find element that is closest to startingElement
	 * 
	 * If the are no more elements left in the defined direction,
	 *
	 *  - if going up, look for element that is the furthest one down the page, but closest x-wise
	 *  - if going down, look for element that is the furthest one up the page, but closest x-wise
	 *  - if going right, look for the element that is the furthest one to the left, but closest y-wise
	 *  - if going left, look for the element that is the fursthes one to the left, but closest y-wise
	 * 
	 * If no elements are found, return startingElement.
	 */

}


