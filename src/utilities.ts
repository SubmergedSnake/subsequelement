import { Options, Bearing, BoundaryCorners, SupportedAngle, Corner } from "../src/types"

export const validateSubsequelementArgs = (startingElement: Element, bearing: keyof typeof Bearing, selectors: string[]) => {

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

export const getTargetElements = (selectors: string[]): Element[] => {
	return selectors.flatMap(selector => Array.from(document.querySelectorAll(selector) || []));
}

export const calculateAlignment = (startingElementRange: number[], otherElementRange: number[]): number => {
	const smallestRangeEnd = Math.min(startingElementRange[1], otherElementRange[1])
	const largestRangeStart = Math.max(startingElementRange[0], otherElementRange[0])

	const alignment = smallestRangeEnd - largestRangeStart
	const alignmentIndex = Math.max(alignment / Math.abs(startingElementRange[1] - startingElementRange[0])
		, alignment / Math.abs(otherElementRange[1] - otherElementRange[0]))

	return alignmentIndex
}

export const getYIntercept = (origin: Corner, degrees: number): number => {
	const m = degreesToRadians(degrees)
	const yIntercept = origin.y - m * origin.x
	return yIntercept
}

export const determineElementCornersForBoundary = (angle: SupportedAngle): BoundaryCorners => {

	switch (angle) {
		case 45:
			return { bottomBoundary: { x: 'left', y: 'bottom' }, topBoundary: { x: 'right', y: 'top' } }
		case -45:
			return { bottomBoundary: { x: 'right', y: 'bottom' }, topBoundary: { x: 'left', y: 'top' } }
		default: throw new Error('Unsupported angle')
	}
}
