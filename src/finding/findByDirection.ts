import { Direction, ImplementsGetBoundingClientRect } from "../types"

type hasRect = ImplementsGetBoundingClientRect

const north = (se: hasRect) => (oe: hasRect) => oe.getBoundingClientRect().bottom <= se.getBoundingClientRect().top
const east = (se: hasRect) => (oe: hasRect) => oe.getBoundingClientRect().left >= se.getBoundingClientRect().right
const south = (se: hasRect) => (oe: hasRect) => oe.getBoundingClientRect().top >= se.getBoundingClientRect().bottom
const west = (se: hasRect) => (oe: hasRect) => oe.getBoundingClientRect().right <= se.getBoundingClientRect().left

const directionFilters = {
	"NORTH": (se: hasRect, oElements: hasRect[]) => oElements.filter(north(se)),
	"NORTHEAST": (se: hasRect, oElements: hasRect[]) => oElements.filter(north(se)).filter(east(se)),
	"EAST": (se: hasRect, oElements: hasRect[]) => oElements.filter(east(se)),
	"SOUTHEAST": (se: hasRect, oElements: hasRect[]) => oElements.filter(south(se)).filter(east(se)),
	"SOUTH": (se: hasRect, oElements: hasRect[]) => oElements.filter(south(se)),
	"SOUTHWEST": (se: hasRect, oElements: hasRect[]) => oElements.filter(south(se)).filter(west(se)),
	"WEST": (se: hasRect, oElements: hasRect[]) => oElements.filter(west(se)),
	"NORTHWEST": (se: hasRect, oElements: hasRect[]) => oElements.filter(north(se)).filter(west(se)),
} satisfies { [key in Direction]: (startingElement: hasRect, otherElements: hasRect[]) => hasRect[] }

export const findInDirection = (startingElement: hasRect, otherElements: hasRect[], direction: Direction): hasRect[] => {
	const directionFunc = directionFilters[direction]
	const elements = directionFunc(startingElement, otherElements)
	return elements
}




