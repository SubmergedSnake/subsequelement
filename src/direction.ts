import { Bearing, IsHtmlElementLike } from "./types"

const northernElements = (se: IsHtmlElementLike) => (oe: IsHtmlElementLike) => oe.getBoundingClientRect().bottom <= se.getBoundingClientRect().top
const easternElements = (se: IsHtmlElementLike) => (oe: IsHtmlElementLike) => oe.getBoundingClientRect().left >= se.getBoundingClientRect().right
const southernElements = (se: IsHtmlElementLike) => (oe: IsHtmlElementLike) => oe.getBoundingClientRect().top >= se.getBoundingClientRect().bottom
const westernElements = (se: IsHtmlElementLike) => (oe: IsHtmlElementLike) => oe.getBoundingClientRect().right <= se.getBoundingClientRect().left

const findFunctions = {
	"n": (se: IsHtmlElementLike, oElements: IsHtmlElementLike[]) => oElements.filter(northernElements(se)),
	"ne": (se: IsHtmlElementLike, oElements: IsHtmlElementLike[]) => oElements.filter(northernElements(se)).filter(easternElements(se)),
	"e": (se: IsHtmlElementLike, oElements: IsHtmlElementLike[]) => oElements.filter(easternElements(se)),
	"se": (se: IsHtmlElementLike, oElements: IsHtmlElementLike[]) => oElements.filter(southernElements(se)).filter(easternElements(se)),
	"s": (se: IsHtmlElementLike, oElements: IsHtmlElementLike[]) => oElements.filter(southernElements(se)),
	"sw": (se: IsHtmlElementLike, oElements: IsHtmlElementLike[]) => oElements.filter(southernElements(se)).filter(westernElements(se)),
	"w": (se: IsHtmlElementLike, oElements: IsHtmlElementLike[]) => oElements.filter(westernElements(se)),
	"nw": (se: IsHtmlElementLike, oElements: IsHtmlElementLike[]) => oElements.filter(northernElements(se)).filter(westernElements(se)),
} satisfies { [key in keyof typeof Bearing]: (startingElement: IsHtmlElementLike, otherElements: IsHtmlElementLike[]) => IsHtmlElementLike[] }

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

export const getElementsInDirection = (startingElement: IsHtmlElementLike, otherElements: IsHtmlElementLike[], bearing: keyof typeof Bearing): IsHtmlElementLike[] => {
	const findFunc = findFunctions[bearing]
	const elements = findFunc(startingElement, otherElements).filter(e => e.id !== startingElement.id)
	return elements
}




