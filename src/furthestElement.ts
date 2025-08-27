import { Bearing, ElementWithAlignment, IsHtmlElementLike } from "./types"

const closestToX = (acc: ElementWithOffsetsAndAlignment, curr: ElementWithOffsetsAndAlignment) => {
	const { x: accX, y: accY } = acc.e.getBoundingClientRect()
	const { x: currX, y: currY } = curr.e.getBoundingClientRect()
	return currY > accY || currX < accX && currY >= accY ? curr : acc
}
const closestToY = (acc: ElementWithOffsetsAndAlignment, curr: ElementWithOffsetsAndAlignment) => {
	const { x: accX, y: accY } = acc.e.getBoundingClientRect()
	const { x: currX, y: currY } = curr.e.getBoundingClientRect()
	return currX > accX || currY < accY && currX >= accX ? curr : acc
}
type ElementWithOffsetsAndAlignment = { e: IsHtmlElementLike, alignment: number, x: number, y: number }


export const furthestElement = (direction: keyof typeof Bearing, startingElement: IsHtmlElementLike, otherElements: ElementWithAlignment[], alignment?: boolean): IsHtmlElementLike => {

	const elementsWithOffsets: ElementWithOffsetsAndAlignment[] = otherElements.map(e => {
		const { x: oeX, y: oeY } = e.e.getBoundingClientRect()
		const { x: seX, y: seY } = startingElement.getBoundingClientRect()
		return {
			e: e.e,
			alignment: e.alignment,
			x: Math.abs(Math.abs(seX) - Math.abs(oeX)),
			y: Math.abs(Math.abs(seY) - Math.abs(oeY))
		}
	})

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
