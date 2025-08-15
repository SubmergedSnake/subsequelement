import { Direction, HasIdAndElementCoords } from "../types"


const northernElements = (se: HasIdAndElementCoords) => (oe: HasIdAndElementCoords) => oe.bottom <= se.top
const easternElements = (se: HasIdAndElementCoords) => (oe: HasIdAndElementCoords) => oe.left >= se.right
const southernElements = (se: HasIdAndElementCoords) => (oe: HasIdAndElementCoords) => oe.top >= se.bottom
const westernElements = (se: HasIdAndElementCoords) => (oe: HasIdAndElementCoords) => oe.right <= se.left

const findFunctions = {
	"NORTH": (se: HasIdAndElementCoords, oElements: HasIdAndElementCoords[]) => oElements.filter(northernElements(se)),
	"NORTHEAST": (se: HasIdAndElementCoords, oElements: HasIdAndElementCoords[]) => oElements.filter(northernElements(se)).filter(easternElements(se)),
	"EAST": (se: HasIdAndElementCoords, oElements: HasIdAndElementCoords[]) => oElements.filter(easternElements(se)),
	"SOUTHEAST": (se: HasIdAndElementCoords, oElements: HasIdAndElementCoords[]) => oElements.filter(southernElements(se)).filter(easternElements(se)),
	"SOUTH": (se: HasIdAndElementCoords, oElements: HasIdAndElementCoords[]) => oElements.filter(southernElements(se)),
	"SOUTHWEST": (se: HasIdAndElementCoords, oElements: HasIdAndElementCoords[]) => oElements.filter(southernElements(se)).filter(westernElements(se)),
	"WEST": (se: HasIdAndElementCoords, oElements: HasIdAndElementCoords[]) => oElements.filter(westernElements(se)),
	"NORTHWEST": (se: HasIdAndElementCoords, oElements: HasIdAndElementCoords[]) => oElements.filter(northernElements(se)).filter(westernElements(se)),
} satisfies { [key in Direction]: (startingElement: HasIdAndElementCoords, otherElements: HasIdAndElementCoords[]) => HasIdAndElementCoords[] }

export const findInDirection = (startingElement: HasIdAndElementCoords, otherElements: HasIdAndElementCoords[], direction: Direction): HasIdAndElementCoords[] => {
	const findFunc = findFunctions[direction]
	const elements = findFunc(startingElement, otherElements)
	return elements
}




