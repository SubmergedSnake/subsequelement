import { Subsequelement } from "./Subsequelement"
import { Bearing, IsHtmlElementLike } from "./types"

const northernElements = (se: IsHtmlElementLike) => (oe: IsHtmlElementLike) => oe.getBoundingClientRect().top < se.getBoundingClientRect().top
const easternElements = (se: IsHtmlElementLike) => (oe: IsHtmlElementLike) => oe.getBoundingClientRect().right > se.getBoundingClientRect().right
const southernElements = (se: IsHtmlElementLike) => (oe: IsHtmlElementLike) => oe.getBoundingClientRect().bottom > se.getBoundingClientRect().bottom
const westernElements = (se: IsHtmlElementLike) => (oe: IsHtmlElementLike) => oe.getBoundingClientRect().left < se.getBoundingClientRect().left

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

export const filterByBearing = (startingElement: IsHtmlElementLike, otherElements: IsHtmlElementLike[], bearing: keyof typeof Bearing): IsHtmlElementLike[] => {
	const findFunc = findFunctions[bearing]
	const elements = findFunc(startingElement, otherElements).filter(se => se.id !== startingElement.id)

	return elements
}




