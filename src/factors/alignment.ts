import { BoundaryCorners, Corner, SubsequElement, SupportedAngle } from "../types";
import { calculateAlignment, degreesToRadians, determineElementCornersForBoundary, getYIntercept } from "../utilities";


export const addAlignment = (startingHTMLElement: HTMLElement, partialSubsequelement: Omit<SubsequElement, 'alignment'>, angle: SupportedAngle): SubsequElement => {

	const { left: oeLeft, right: oeRight, top: oeTop, bottom: oeBottom } = partialSubsequelement.e.getBoundingClientRect()
	const { left: sLeft, right: sRight, top: sTop, bottom: sBottom } = startingHTMLElement.getBoundingClientRect()

	console.log(`Adding alignment between ${startingHTMLElement.textContent} and ${partialSubsequelement.e.textContent}`)

	if (angle.valueOf() === 90) {
		const alignment = calculateAlignment([sLeft, sRight], [oeLeft, oeRight])
		return { ...partialSubsequelement, alignment }
	}
	else if (angle.valueOf() === 0) {
		const alignment = calculateAlignment([sTop, sBottom], [oeTop, oeBottom])
		return { ...partialSubsequelement, alignment }

	}

	const { bottomBoundary: { x: bottomX, y: bottomY }, topBoundary: { x: topX, y: topY } } = determineElementCornersForBoundary(angle)


	const startingElementYInterceptTop = getYIntercept({ x: startingHTMLElement.getBoundingClientRect()[topX], y: startingHTMLElement.getBoundingClientRect()[topY] }, angle)
	const startingElementYInterceptBottom = getYIntercept({ x: startingHTMLElement.getBoundingClientRect()[bottomX], y: startingHTMLElement.getBoundingClientRect()[bottomY] }, angle)

	const otherElementYInterceptTop = getYIntercept({ x: partialSubsequelement.e.getBoundingClientRect()[topX], y: partialSubsequelement.e.getBoundingClientRect()[topY] }, angle)
	const otherElementYInterceptBottom = getYIntercept({ x: partialSubsequelement.e.getBoundingClientRect()[bottomX], y: partialSubsequelement.e.getBoundingClientRect()[bottomY] }, angle)

	const alignment = calculateAlignment([startingElementYInterceptTop, startingElementYInterceptBottom], [otherElementYInterceptTop, otherElementYInterceptBottom])

	return { ...partialSubsequelement, alignment }
}
