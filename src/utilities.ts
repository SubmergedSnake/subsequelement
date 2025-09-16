import { Options, Bearing } from "../src/types"

export const validateSubsequelementArgs = (startingElement: HTMLElement, bearing: keyof typeof Bearing, selectors: string[]) => {

	const providedArguments = {
		startingElement: startingElement.getBoundingClientRect || false,
		selectors: typeof selectors === "undefined" ? false : Array.isArray(selectors) && selectors.every(s => typeof s === "string"),
		bearing: Object.keys(Bearing).includes(bearing as keyof typeof Bearing)
	}

	const missingRequiredOptions = Object.entries(providedArguments).filter(([_key, value]) => value === false).map(([key, _value]) => key)

	if (missingRequiredOptions.length > 0) {
		throw Error(`Missing or invalid args: ${missingRequiredOptions}`)
	}
}

export const degreesToRadians = (degrees: number) => {
	return degrees * (Math.PI / 180);
}

export const getTargetElements = (selectors: string[] | undefined): HTMLElement[] => {
	const effectiveSelectors = Array.isArray(selectors) && selectors.length > 0
		? selectors
		: ['body *'];

	return effectiveSelectors.flatMap(selector => Array.from(document.querySelectorAll(selector) || []));
}
