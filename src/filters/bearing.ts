import { Bearing } from "../types"

const northernElements = (se: Element) => (oe: Element) => oe.getBoundingClientRect().top < se.getBoundingClientRect().top
const easternElements = (se: Element) => (oe: Element) => oe.getBoundingClientRect().right > se.getBoundingClientRect().right
const southernElements = (se: Element) => (oe: Element) => oe.getBoundingClientRect().bottom > se.getBoundingClientRect().bottom
const westernElements = (se: Element) => (oe: Element) => oe.getBoundingClientRect().left < se.getBoundingClientRect().left

const findFunctions = {
	"n": (se: Element, oElements: Element[]) => oElements.filter(northernElements(se)),
	"ne": (se: Element, oElements: Element[]) => oElements.filter(northernElements(se)).filter(easternElements(se)),
	"e": (se: Element, oElements: Element[]) => oElements.filter(easternElements(se)),
	"se": (se: Element, oElements: Element[]) => oElements.filter(southernElements(se)).filter(easternElements(se)),
	"s": (se: Element, oElements: Element[]) => oElements.filter(southernElements(se)),
	"sw": (se: Element, oElements: Element[]) => oElements.filter(southernElements(se)).filter(westernElements(se)),
	"w": (se: Element, oElements: Element[]) => oElements.filter(westernElements(se)),
	"nw": (se: Element, oElements: Element[]) => oElements.filter(northernElements(se)).filter(westernElements(se)),
} satisfies { [key in keyof typeof Bearing]: (startingElement: Element, otherElements: Element[]) => Element[] }

export const filterByBearing = (startingElement: Element, otherElements: Element[], bearing: keyof typeof Bearing): Element[] => {
	const findFunc = findFunctions[bearing]
	const elements = findFunc(startingElement, otherElements)

	return elements
}




