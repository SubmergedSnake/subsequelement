import { Bearing, ElementWithAlignment, HasIdAndElementCoords } from "../types"

const closestToX = (acc: ElementWithOffsetsAndAlignment, curr: ElementWithOffsetsAndAlignment) => curr.e.y > acc.e.y || curr.e.x < acc.e.x && curr.e.y >= acc.e.y ? curr : acc
const closestToY = (acc: ElementWithOffsetsAndAlignment, curr: ElementWithOffsetsAndAlignment) => curr.e.x > acc.e.x || curr.e.y < acc.e.y && curr.e.x >= acc.e.x ? curr : acc

type ElementWithOffsetsAndAlignment = { e: HasIdAndElementCoords, alignment: number, x: number, y: number }


export const furthestElement = (direction: keyof typeof Bearing, startingElement: HasIdAndElementCoords, otherElements: ElementWithAlignment[], alignment?: boolean): HasIdAndElementCoords => {

	const elementsWithOffsets: ElementWithOffsetsAndAlignment[] = otherElements.map(e => (
		{
			e: e.e,
			alignment: e.alignment,
			x: Math.abs(Math.abs(startingElement.x) - Math.abs(e.e.x)),
			y: Math.abs(Math.abs(startingElement.y) - Math.abs(e.e.y))
		}
	)
	)

	if (['w', 'e'].includes(direction)) {
		return elementsWithOffsets.reduce(closestToY).e
	} else if (['n', 's'].includes(direction)) {
		return elementsWithOffsets.reduce(closestToX).e
	} else {
		if (alignment) {
			// return elementsWithOffsets.reduce((acc, curr) => curr.x >= acc.x && curr.y >= acc.y || curr.alignment > acc.alignment ? curr : acc).e
			return elementsWithOffsets.reduce((acc, curr) => curr.alignment > acc.alignment ? curr : acc).e
		} else {
			return elementsWithOffsets.reduce((acc, curr) => curr.x >= acc.x && curr.y >= acc.y ? curr : acc).e
		}
	}
}
