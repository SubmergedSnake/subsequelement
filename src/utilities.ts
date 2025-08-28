import { Options, Bearing, Predicate } from "../src/types"

export const validateOptions = (options: Options): Options => {
	const { cssSelectorForTargetElements, predicate, bearing, startingElement } = options

	const hasStartingElement = startingElement instanceof HTMLElement
	const hasCssSelectorForTargetElements = typeof cssSelectorForTargetElements === "string"
	const hasValidPredicate = Object.values(Predicate).includes(predicate as Predicate) || predicate === undefined
	const hasDirection = Object.keys(Bearing).includes(bearing as keyof typeof Bearing)

	if ([hasStartingElement, hasCssSelectorForTargetElements, hasValidPredicate, hasDirection].includes(false)) {
		throw Error(`Insufficient or faulty arguments provided to find -function. Required 
		arguments are: startingElement, cssSelectorForTargetElements, strategy and direction.`)
	}
	return options
}

export const findElements = (cssSelector: string): HTMLElement[] => {
	return Array.from(document.querySelectorAll(cssSelector))
}

export const degreesToRadians = (degrees: number) => {
	return degrees * (Math.PI / 180);
}
