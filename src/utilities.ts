import { Options, Bearing, IsHtmlElementLike } from "../src/types"

export const validateSubsequelementArgs = (startingElement: IsHtmlElementLike, bearing: keyof typeof Bearing, options: Options | undefined) => {


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

export const findElements = (cssSelector: string): HTMLElement[] => {
	return Array.from(document.querySelectorAll(cssSelector))
}

export const degreesToRadians = (degrees: number) => {
	return degrees * (Math.PI / 180);
}
