import { Options, Bearing } from "../src/types"

export const validateSubsequelementArgs = (startingElement: Element, bearing: keyof typeof Bearing, options: Options | undefined) => {

	const providedArguments = {
		startingElement: startingElement.getBoundingClientRect || false,
		selectors: typeof options?.selectors === "undefined" ? true : Array.isArray(options?.selectors) && options?.selectors.every(s => typeof s === "string"),
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

export const getTargetElements = (selectors: string[] | undefined): Element[] => {
	const effectiveSelectors = Array.isArray(selectors) && selectors.length > 0
		? selectors
		: ['body *'];

	return effectiveSelectors.flatMap(selector => Array.from(document.querySelectorAll(selector) || []));
}
