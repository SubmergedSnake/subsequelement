import { Options, Bearing, Predicate } from "../src/types"

export const validateArgs = (options: Options) => {
	const { cssSelectorForTargetElements, predicate: strategy, bearing, startingElement } = options

	const hasStartingElement = startingElement instanceof HTMLElement
	const hasCssSelectorForTargetElements = typeof cssSelectorForTargetElements === "string"
	const hasStrategy = Object.values(Predicate).includes(strategy as Predicate)
	const hasDirection = Object.keys(Bearing).includes(bearing as keyof typeof Bearing)

	if ([hasStartingElement, hasCssSelectorForTargetElements, hasStrategy, hasDirection].includes(false)) {
		throw Error(`Insufficient or faulty arguments provided to find -function. Required 
		arguments are: startingElement, cssSelectorForTargetElements, strategy and direction.`)
	}
}

export const findElements = (cssSelector: string): HTMLElement[] => {
	return Array.from(document.querySelectorAll(cssSelector))
}


export const omitStartingElement = (startingElement: HTMLElement, viableElements: HTMLElement[]): HTMLElement[] => {
	return viableElements.filter(e => e !== startingElement)
}


export const degreesToRadians = (degrees: number) => {
	return degrees * (Math.PI / 180);
}
