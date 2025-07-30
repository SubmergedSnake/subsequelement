import { Direction, ImplementsGetBoundingClientRect } from "../types";

export const getNewStartingPoint = (startingElement: ImplementsGetBoundingClientRect, validElements: ImplementsGetBoundingClientRect[], direction: Direction): ImplementsGetBoundingClientRect => {
	let phantomElementCoordinates = startingElement.getBoundingClientRect()


	/* When going down or right, we set the bottom and right (respectively) to 0 to make the element
	* appear the first element coming from the opposite direction.
	* 
	* When going up or left, we use the same logic but also adjust the bottom and right properties
	* so as to retain the (phantom) element dimensions, which how the closest element is determined.
	*/

	switch (direction) {
		case Direction.RIGHT:
			phantomElementCoordinates = { ...phantomElementCoordinates, right: 0 }
			break;
		case Direction.LEFT:
			const rightMost = Math.max(...validElements.map(e => e.getBoundingClientRect().right))
			phantomElementCoordinates = {
				...phantomElementCoordinates, left: rightMost + 1, right: phantomElementCoordinates.right - phantomElementCoordinates.left + rightMost + 1
			}
			break;
		case Direction.UP:
			const bottomMost = Math.max(...validElements.map(e => e.getBoundingClientRect().bottom))
			phantomElementCoordinates = {
				...phantomElementCoordinates, top: bottomMost + 1, bottom: phantomElementCoordinates.bottom - phantomElementCoordinates.top + bottomMost + 1
			}
			break;
		case Direction.DOWN:
			phantomElementCoordinates = { ...phantomElementCoordinates, bottom: 0 }
			break;
	}


	return {
		id: startingElement.id, getBoundingClientRect: () =>
			({ ...phantomElementCoordinates })
	}
}
