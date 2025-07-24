import { FindArguments } from "../dist/types"

export const findElements = (cssSelector: string): HTMLElement[] => {
	return Array.from(document.querySelectorAll(cssSelector))
}

export const filterElementsByDirection = (startingElement: HTMLElement, otherElements: HTMLElement[], direction: FindArguments['direction']) => {

}

export const omitStartingElement = (startingElement: HTMLElement, viableElements: HTMLElement[]): HTMLElement[] => {
	return viableElements.filter(e => e !== startingElement)
}

export const filterUsingStrategy = (strategy: FindArguments['strategy'], startingElement: HTMLElement, otherElements: HTMLElement[]) => {

}
