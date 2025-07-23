
type FindArguments = {
	startingElement: HTMLElement,
	cssSelectorForTargetElements: string,
	direction: 'up' | 'down' | 'left' | 'right',
	strategy: 'strict' | 'flow'
}

export const find = (args: FindArguments) => {


	// gather all elements that match criteria
	const otherElements = document.querySelector(args.cssSelectorForTargetElements)

	// Omit startingElement

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



