import { Bearing, HasIdAndElementCoords } from "../types";

export const getNewStartingPoint = (startingElement: HasIdAndElementCoords, validElements: HasIdAndElementCoords[], bearing: keyof typeof Bearing): HasIdAndElementCoords => {
	let phantomElementCoordinates = startingElement


	/* When going down or right, we set the bottom and right (respectively) to 0 to make the element
	* appear the first element coming from the opposite direction.
	* 
	* When going up or left, we use the same logic but also adjust the bottom and right properties
	* so as to retain the (phantom) element dimensions, which how the closest element is determined.
	*/

	switch (bearing) {
		case 'e':
			phantomElementCoordinates = { ...phantomElementCoordinates, right: 0 }
			break;
		case 'w':
			const rightMost = Math.max(...validElements.map(e => e.right))
			phantomElementCoordinates = {
				...phantomElementCoordinates, left: rightMost + 1, right: phantomElementCoordinates.right - phantomElementCoordinates.left + rightMost + 1
			}
			break;
		case 'n':
			const bottomMost = Math.max(...validElements.map(e => e.bottom))
			phantomElementCoordinates = {
				...phantomElementCoordinates, top: bottomMost + 1, bottom: phantomElementCoordinates.bottom - phantomElementCoordinates.top + bottomMost + 1
			}
			break;
		case 's':
			const topMost = Math.min(...validElements.map(e => e.top))
			phantomElementCoordinates = { ...phantomElementCoordinates, bottom: topMost - 1, top: phantomElementCoordinates.top + topMost - 1 }
			break;
	}


	return ({
		...phantomElementCoordinates
	})
}
