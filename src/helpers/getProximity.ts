import { Subsequelement } from "../Subsequelement";
import { IsHtmlElementLike } from "../types";
const calculateOverlap = (startingElement: IsHtmlElementLike, otherElement: IsHtmlElementLike) => {
	const { left: sLeft, top: sTop, height: sHeight, width: sWidth } = startingElement.getBoundingClientRect()
	const { left: oeLeft, top: oeTop, height: oeHeight, width: oeWidth } = otherElement.getBoundingClientRect()

	const overlapX = Math.max(0, Math.min(sLeft + sWidth, oeLeft + oeWidth) - Math.max(sLeft, oeLeft));
	const overlapY = Math.max(0, Math.min(sTop + sHeight, oeTop + oeHeight) - Math.max(sTop, oeTop));

	return -(overlapX * overlapY)
}

const checkOverlap = (startingElement: IsHtmlElementLike, otherElement: IsHtmlElementLike) => {
	const { left: sLeft, top: sTop, height: sHeight, width: sWidth } = startingElement.getBoundingClientRect()
	const { left: oeLeft, top: oeTop, height: oeHeight, width: oeWidth } = otherElement.getBoundingClientRect()

	if (sLeft + sWidth <= oeLeft || oeLeft + oeWidth <= sLeft) {
		return false;
	}
	if (sTop + sHeight <= oeTop || oeTop + oeHeight <= sTop) {
		return false;
	}
	return true;
}

const calculateProximity = (startingElement: IsHtmlElementLike, otherElement: IsHtmlElementLike): number => {
	const { left: sLeft, right: sRight, top: sTop, bottom: sBottom, height: sHeight, width: sWidth } = startingElement.getBoundingClientRect()
	const { left: oeLeft, right: oeRight, top: oeTop, bottom: oeBottom, height: oeHeight, width: oeWidth } = otherElement.getBoundingClientRect()

	const verticalTotalRange = Math.abs(Math.min(oeTop, sTop) - Math.max(oeBottom, sBottom))
	const verticalDistance = verticalTotalRange - sHeight - oeHeight

	const horizontalTotalRange = Math.abs(Math.min(oeLeft, sLeft) - Math.max(oeRight, sRight))
	const horizontalDistance = horizontalTotalRange - sWidth - oeWidth
	const totalProximity = horizontalDistance + verticalDistance
	const overlap = checkOverlap(startingElement, otherElement) ? calculateOverlap(startingElement, otherElement) : undefined

	return overlap || totalProximity
}




// export const addProximity = (startingElement: IsHtmlElementLike, otherElement: IsHtmlElementLike, bearing: keyof typeof Bearing): Omit<Subsequelement, 'alignment'> => {
export const addProximity = (startingElement: IsHtmlElementLike, otherElement: IsHtmlElementLike): Omit<Subsequelement, 'alignment'> => {
	return {
		e: otherElement, proximity: calculateProximity(startingElement, otherElement)
	}
}
