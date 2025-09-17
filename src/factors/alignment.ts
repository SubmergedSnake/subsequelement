import { BoundaryCorners, Corner, SubsequElement, SupportedAngle } from "../types";
import { degreesToRadians } from "../utilities";

export const calculateAlignment = (startingElementRange: number[], otherElementRange: number[]): number => {
	const smallestRangeEnd = Math.min(startingElementRange[1], otherElementRange[1])
	const largestRangeStart = Math.max(startingElementRange[0], otherElementRange[0])
	const alignment = smallestRangeEnd - largestRangeStart
	const alignmentIndex = alignment / (startingElementRange[1] - startingElementRange[0])
	return alignmentIndex
}

const getYIntercept = (origin: Corner, degrees: number): number => {
	const m = degreesToRadians(degrees)
	const yIntercept = origin.y - m * origin.x
	return yIntercept
}

const determineElementCornersForBoundary = (angle: SupportedAngle): BoundaryCorners => {

	switch (angle) {
		case 45:
			return { bottomBoundary: { x: 'left', y: 'bottom' }, topBoundary: { x: 'right', y: 'top' } }
		case -45:
			return { bottomBoundary: { x: 'right', y: 'bottom' }, topBoundary: { x: 'left', y: 'top' } }
		default: throw new Error('Unsupported angle')
	}
}

export const addAlignment = (startingHTMLElement: HTMLElement, otherHTMLElement: Omit<SubsequElement, 'alignment'>, angle: SupportedAngle): SubsequElement => {

	const { left: oeLeft, right: oeRight, top: oeTop, bottom: oeBottom } = otherHTMLElement.e.getBoundingClientRect()
	const { left: sLeft, right: sRight, top: sTop, bottom: sBottom } = startingHTMLElement.getBoundingClientRect()


	if (angle.valueOf() === 90) {
		const alignment = calculateAlignment([oeLeft, oeRight], [sLeft, sRight])
		return { ...otherHTMLElement, alignment }
	}
	else if (angle.valueOf() === 0) {
		const alignment = calculateAlignment([oeTop, oeBottom], [sTop, sBottom])
		return { ...otherHTMLElement, alignment }
	}

	const { bottomBoundary: { x: bottomX, y: bottomY }, topBoundary: { x: topX, y: topY } } = determineElementCornersForBoundary(angle)


	const startingElementYInterceptTop = getYIntercept({ x: startingHTMLElement.getBoundingClientRect()[topX], y: startingHTMLElement.getBoundingClientRect()[topY] }, angle)
	const startingElementYInterceptBottom = getYIntercept({ x: startingHTMLElement.getBoundingClientRect()[bottomX], y: startingHTMLElement.getBoundingClientRect()[bottomY] }, angle)

	const otherElementYInterceptTop = getYIntercept({ x: otherHTMLElement.e.getBoundingClientRect()[topX], y: otherHTMLElement.e.getBoundingClientRect()[topY] }, angle)
	const otherElementYInterceptBottom = getYIntercept({ x: otherHTMLElement.e.getBoundingClientRect()[bottomX], y: otherHTMLElement.e.getBoundingClientRect()[bottomY] }, angle)

	const alignment = calculateAlignment([otherElementYInterceptTop, otherElementYInterceptBottom], [startingElementYInterceptTop, startingElementYInterceptBottom])

	return { ...otherHTMLElement, alignment }
}
