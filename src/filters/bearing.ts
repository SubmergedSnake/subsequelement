import { Bearing } from "../types"

const northernHTMLElements = (se: HTMLElement) => (oe: HTMLElement) => oe.getBoundingClientRect().top < se.getBoundingClientRect().top
const easternHTMLElements = (se: HTMLElement) => (oe: HTMLElement) => oe.getBoundingClientRect().right > se.getBoundingClientRect().right
const southernHTMLElements = (se: HTMLElement) => (oe: HTMLElement) => oe.getBoundingClientRect().bottom > se.getBoundingClientRect().bottom
const westernHTMLElements = (se: HTMLElement) => (oe: HTMLElement) => oe.getBoundingClientRect().left < se.getBoundingClientRect().left

const findFunctions = {
	"n": (se: HTMLElement, oHTMLElements: HTMLElement[]) => oHTMLElements.filter(northernHTMLElements(se)),
	"ne": (se: HTMLElement, oHTMLElements: HTMLElement[]) => oHTMLElements.filter(northernHTMLElements(se)).filter(easternHTMLElements(se)),
	"e": (se: HTMLElement, oHTMLElements: HTMLElement[]) => oHTMLElements.filter(easternHTMLElements(se)),
	"se": (se: HTMLElement, oHTMLElements: HTMLElement[]) => oHTMLElements.filter(southernHTMLElements(se)).filter(easternHTMLElements(se)),
	"s": (se: HTMLElement, oHTMLElements: HTMLElement[]) => oHTMLElements.filter(southernHTMLElements(se)),
	"sw": (se: HTMLElement, oHTMLElements: HTMLElement[]) => oHTMLElements.filter(southernHTMLElements(se)).filter(westernHTMLElements(se)),
	"w": (se: HTMLElement, oHTMLElements: HTMLElement[]) => oHTMLElements.filter(westernHTMLElements(se)),
	"nw": (se: HTMLElement, oHTMLElements: HTMLElement[]) => oHTMLElements.filter(northernHTMLElements(se)).filter(westernHTMLElements(se)),
} satisfies { [key in keyof typeof Bearing]: (startingHTMLElement: HTMLElement, otherHTMLElements: HTMLElement[]) => HTMLElement[] }

export const filterByBearing = (startingHTMLElement: HTMLElement, otherHTMLElements: HTMLElement[], bearing: keyof typeof Bearing): HTMLElement[] => {
	const findFunc = findFunctions[bearing]
	const elements = findFunc(startingHTMLElement, otherHTMLElements)

	return elements
}




