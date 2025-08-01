import { Direction, ImplementsGetBoundingClientRect } from "../types"

type hasRect = ImplementsGetBoundingClientRect

const northernElements = (se: hasRect) => (oe: hasRect) => oe.getBoundingClientRect().bottom <= se.getBoundingClientRect().top
const easternElements = (se: hasRect) => (oe: hasRect) => oe.getBoundingClientRect().left >= se.getBoundingClientRect().right
const southernElements = (se: hasRect) => (oe: hasRect) => oe.getBoundingClientRect().top >= se.getBoundingClientRect().bottom
const westernElements = (se: hasRect) => (oe: hasRect) => oe.getBoundingClientRect().right <= se.getBoundingClientRect().left

const findFunctions = {
	"NORTH": (se: hasRect, oElements: hasRect[]) => oElements.filter(northernElements(se)),
	"NORTHEAST": (se: hasRect, oElements: hasRect[]) => oElements.filter(northernElements(se)).filter(easternElements(se)),
	"EAST": (se: hasRect, oElements: hasRect[]) => oElements.filter(easternElements(se)),
	"SOUTHEAST": (se: hasRect, oElements: hasRect[]) => oElements.filter(southernElements(se)).filter(easternElements(se)),
	"SOUTH": (se: hasRect, oElements: hasRect[]) => oElements.filter(southernElements(se)),
	"SOUTHWEST": (se: hasRect, oElements: hasRect[]) => oElements.filter(southernElements(se)).filter(westernElements(se)),
	"WEST": (se: hasRect, oElements: hasRect[]) => oElements.filter(westernElements(se)),
	"NORTHWEST": (se: hasRect, oElements: hasRect[]) => oElements.filter(northernElements(se)).filter(westernElements(se)),
} satisfies { [key in Direction]: (startingElement: hasRect, otherElements: hasRect[]) => hasRect[] }

export const findInDirection = (startingElement: hasRect, otherElements: hasRect[], direction: Direction): hasRect[] => {
	const findFunc = findFunctions[direction]
	const elements = findFunc(startingElement, otherElements)
	return elements
}




