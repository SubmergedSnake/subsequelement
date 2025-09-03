import { Subsequelement } from "../Subsequelement"
import { Bearing, IsHtmlElementLike } from "./types"

const northernElements = (se: IsHtmlElementLike) => (oe: Subsequelement) => oe.e.getBoundingClientRect().top < se.getBoundingClientRect().top
const easternElements = (se: IsHtmlElementLike) => (oe: Subsequelement) => oe.e.getBoundingClientRect().right > se.getBoundingClientRect().right
const southernElements = (se: IsHtmlElementLike) => (oe: Subsequelement) => oe.e.getBoundingClientRect().bottom > se.getBoundingClientRect().bottom
const westernElements = (se: IsHtmlElementLike) => (oe: Subsequelement) => oe.e.getBoundingClientRect().left < se.getBoundingClientRect().left

const findFunctions = {
	"n": (se: IsHtmlElementLike, oElements: Subsequelement[]) => oElements.filter(northernElements(se)),
	"ne": (se: IsHtmlElementLike, oElements: Subsequelement[]) => oElements.filter(northernElements(se)).filter(easternElements(se)),
	"e": (se: IsHtmlElementLike, oElements: Subsequelement[]) => oElements.filter(easternElements(se)),
	"se": (se: IsHtmlElementLike, oElements: Subsequelement[]) => oElements.filter(southernElements(se)).filter(easternElements(se)),
	"s": (se: IsHtmlElementLike, oElements: Subsequelement[]) => oElements.filter(southernElements(se)),
	"sw": (se: IsHtmlElementLike, oElements: Subsequelement[]) => oElements.filter(southernElements(se)).filter(westernElements(se)),
	"w": (se: IsHtmlElementLike, oElements: Subsequelement[]) => oElements.filter(westernElements(se)),
	"nw": (se: IsHtmlElementLike, oElements: Subsequelement[]) => oElements.filter(northernElements(se)).filter(westernElements(se)),
} satisfies { [key in keyof typeof Bearing]: (startingElement: IsHtmlElementLike, otherElements: Subsequelement[]) => Subsequelement[] }

export const getElementsByBearing = (startingElement: IsHtmlElementLike, otherElements: Subsequelement[], bearing: keyof typeof Bearing): Subsequelement[] => {
	const findFunc = findFunctions[bearing]
	const elements = findFunc(startingElement, otherElements).filter(se => se.e.id !== startingElement.id)
	return elements
}




