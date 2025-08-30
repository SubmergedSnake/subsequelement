import { Options, Bearing } from "../src/types"

export const validateOptions = (options: Options): Options => {
	const { cssSelectorForTargetElements, bearing, startingElement } = options

	const providedOptions = {
		startingElement: startingElement.getBoundingClientRect,
		cssSelectorForTargetElements: typeof cssSelectorForTargetElements === "string",
		bearing: Object.keys(Bearing).includes(bearing as keyof typeof Bearing)
	}

	const missingRequiredOptions = Object.entries(providedOptions).filter(([_key, value]) => value === false).map(([key, _value]) => key)

	if (missingRequiredOptions.length > 0) {
		throw Error(`Missing required options: ${missingRequiredOptions}`)
	}
	return options
}

export const findElements = (cssSelector: string): HTMLElement[] => {
	return Array.from(document.querySelectorAll(cssSelector))
}

export const degreesToRadians = (degrees: number) => {
	return degrees * (Math.PI / 180);
}
