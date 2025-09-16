import { SubsequElement } from "../types";

const calculateProximity = (startingHTMLElement: HTMLElement, otherElement: HTMLElement): number => {
	const { left: sLeft, right: sRight, top: sTop, bottom: sBottom, height: sHeight, width: sWidth } = startingHTMLElement.getBoundingClientRect()
	const { left: oeLeft, right: oeRight, top: oeTop, bottom: oeBottom, height: oeHeight, width: oeWidth } = otherElement.getBoundingClientRect()

	const verticalTotalRange = Math.abs(Math.min(oeTop, sTop) - Math.max(oeBottom, sBottom))
	const verticalDistance = verticalTotalRange - sHeight - oeHeight

	const horizontalTotalRange = Math.abs(Math.min(oeLeft, sLeft) - Math.max(oeRight, sRight))
	const horizontalDistance = horizontalTotalRange - sWidth - oeWidth
	const totalProximity = horizontalDistance + verticalDistance

	return totalProximity
}




export const addProximity = (startingHTMLElement: HTMLElement, otherElement: HTMLElement): Omit<SubsequElement, 'alignment'> => {
	return {
		e: otherElement, proximity: calculateProximity(startingHTMLElement, otherElement)
	}
}
