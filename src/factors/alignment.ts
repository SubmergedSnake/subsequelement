import { SubsequElement, SupportedAngle } from "../types";
import { calculateAlignment, determineElementCornersForBoundary, getYIntercept } from "../utilities";


export const addAlignment = (startingElement: Element, partialSubsequelement: Omit<SubsequElement, 'alignment'>, angle: SupportedAngle): SubsequElement => {

	const { left: oeLeft, right: oeRight, top: oeTop, bottom: oeBottom } = partialSubsequelement.e.getBoundingClientRect()
	const { left: sLeft, right: sRight, top: sTop, bottom: sBottom } = startingElement.getBoundingClientRect()

	if (angle.valueOf() === 90) {
		const alignment = calculateAlignment([sLeft, sRight], [oeLeft, oeRight])
		return { ...partialSubsequelement, alignment }
	}
	else if (angle.valueOf() === 0) {
		const alignment = calculateAlignment([sTop, sBottom], [oeTop, oeBottom])
		return { ...partialSubsequelement, alignment }

	}

	const { bottomBoundary: { x: bottomX, y: bottomY }, topBoundary: { x: topX, y: topY } } = determineElementCornersForBoundary(angle)


	const startingElementYInterceptTop = getYIntercept({ x: startingElement.getBoundingClientRect()[topX], y: startingElement.getBoundingClientRect()[topY] }, angle)
	const startingElementYInterceptBottom = getYIntercept({ x: startingElement.getBoundingClientRect()[bottomX], y: startingElement.getBoundingClientRect()[bottomY] }, angle)

	const otherElementYInterceptTop = getYIntercept({ x: partialSubsequelement.e.getBoundingClientRect()[topX], y: partialSubsequelement.e.getBoundingClientRect()[topY] }, angle)
	const otherElementYInterceptBottom = getYIntercept({ x: partialSubsequelement.e.getBoundingClientRect()[bottomX], y: partialSubsequelement.e.getBoundingClientRect()[bottomY] }, angle)

	const alignment = calculateAlignment([startingElementYInterceptTop, startingElementYInterceptBottom], [otherElementYInterceptTop, otherElementYInterceptBottom])

	return { ...partialSubsequelement, alignment }
}
