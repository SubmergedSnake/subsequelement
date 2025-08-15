import { Direction, HasIdAndElementCoords } from "../types";

export const getNewStartingPoint = (startingElement: HasIdAndElementCoords, validElements: HasIdAndElementCoords[], direction: Direction): HasIdAndElementCoords => {
	let phantomElementCoordinates = startingElement.getBoundingClientRect()


	/* When going down or right, we set the bottom and right (respectively) to 0 to make the element
	* appear the first element coming from the opposite direction.
	* 
	* When going up or left, we use the same logic but also adjust the bottom and right properties
	* so as to retain the (phantom) element dimensions, which how the closest element is determined.
	*/

	switch (direction) {
		case Direction.EAST:
			phantomElementCoordinates = { ...phantomElementCoordinates, right: 0 }
			break;
		case Direction.WEST:
			const rightMost = Math.max(...validElements.map(e => e.getBoundingClientRect().right))
			phantomElementCoordinates = {
				...phantomElementCoordinates, left: rightMost + 1, right: phantomElementCoordinates.right - phantomElementCoordinates.left + rightMost + 1
			}
			break;
		case Direction.NORTH:
			const bottomMost = Math.max(...validElements.map(e => e.getBoundingClientRect().bottom))
			phantomElementCoordinates = {
				...phantomElementCoordinates, top: bottomMost + 1, bottom: phantomElementCoordinates.bottom - phantomElementCoordinates.top + bottomMost + 1
			}
			break;
		case Direction.SOUTH:
			const topMost = Math.min(...validElements.map(e => e.getBoundingClientRect().top))
			phantomElementCoordinates = { ...phantomElementCoordinates, bottom: topMost - 1, top: phantomElementCoordinates.top + topMost - 1 }
			break;
	}


	return {
		id: startingElement.id, getBoundingClientRect: () =>
			({ ...phantomElementCoordinates })
	}
}
