import { Bearing, HasIdAndElementCoords } from "../types"

const northernElements = (se: HasIdAndElementCoords) => (oe: HasIdAndElementCoords) => oe.bottom <= se.top
const easternElements = (se: HasIdAndElementCoords) => (oe: HasIdAndElementCoords) => oe.left >= se.right
const southernElements = (se: HasIdAndElementCoords) => (oe: HasIdAndElementCoords) => oe.top >= se.bottom
const westernElements = (se: HasIdAndElementCoords) => (oe: HasIdAndElementCoords) => oe.right <= se.left

const findFunctions = {
	"n": (se: HasIdAndElementCoords, oElements: HasIdAndElementCoords[]) => oElements.filter(northernElements(se)),
	"ne": (se: HasIdAndElementCoords, oElements: HasIdAndElementCoords[]) => oElements.filter(northernElements(se)).filter(easternElements(se)),
	"e": (se: HasIdAndElementCoords, oElements: HasIdAndElementCoords[]) => oElements.filter(easternElements(se)),
	"se": (se: HasIdAndElementCoords, oElements: HasIdAndElementCoords[]) => oElements.filter(southernElements(se)).filter(easternElements(se)),
	"s": (se: HasIdAndElementCoords, oElements: HasIdAndElementCoords[]) => oElements.filter(southernElements(se)),
	"sw": (se: HasIdAndElementCoords, oElements: HasIdAndElementCoords[]) => oElements.filter(southernElements(se)).filter(westernElements(se)),
	"w": (se: HasIdAndElementCoords, oElements: HasIdAndElementCoords[]) => oElements.filter(westernElements(se)),
	"nw": (se: HasIdAndElementCoords, oElements: HasIdAndElementCoords[]) => oElements.filter(northernElements(se)).filter(westernElements(se)),
} satisfies { [key in keyof typeof Bearing]: (startingElement: HasIdAndElementCoords, otherElements: HasIdAndElementCoords[]) => HasIdAndElementCoords[] }

const reverseFindFunctions = {
	"n": findFunctions.s,
	"ne": findFunctions.sw,
	"e": findFunctions.w,
	"se": findFunctions.nw,
	"s": findFunctions.n,
	"sw": findFunctions.ne,
	"w": findFunctions.e,
	"nw": findFunctions.se
}

export const findInDirection = (startingElement: HasIdAndElementCoords, otherElements: HasIdAndElementCoords[], bearing: keyof typeof Bearing, reverse: 'reverse' | '' = ''): HasIdAndElementCoords[] => {
	const findFunc = reverse === 'reverse' ? reverseFindFunctions[bearing] : findFunctions[bearing]
	const elements = findFunc(startingElement, otherElements)
	return elements
}




