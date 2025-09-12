import { IsHtmlElementLike, SubsequElement } from "../types";

const calculateOverlap = (startingElement: Element, otherElement: SubsequElement) => {
	const { left: sLeft, top: sTop, height: sHeight, width: sWidth } = startingElement.getBoundingClientRect()
	const { left: oeLeft, top: oeTop, height: oeHeight, width: oeWidth } = otherElement.e.getBoundingClientRect()

	const overlapX = Math.max(0, Math.min(sLeft + sWidth, oeLeft + oeWidth) - Math.max(sLeft, oeLeft));
	const overlapY = Math.max(0, Math.min(sTop + sHeight, oeTop + oeHeight) - Math.max(sTop, oeTop));

	return overlapX * overlapY
}

const checkOverlap = (startingElement: Element, otherElement: SubsequElement) => {
	const { left: sLeft, top: sTop, height: sHeight, width: sWidth } = startingElement.getBoundingClientRect()
	const { left: oeLeft, top: oeTop, height: oeHeight, width: oeWidth } = otherElement.e.getBoundingClientRect()

	if (sLeft + sWidth <= oeLeft || oeLeft + oeWidth <= sLeft) {
		return false;
	}
	if (sTop + sHeight <= oeTop || oeTop + oeHeight <= sTop) {
		return false;
	}
	return true;
}

export const addOverlap = (startingElement: Element, otherElement: SubsequElement): SubsequElement => {
	const overlap = checkOverlap(startingElement, otherElement) ? calculateOverlap(startingElement, otherElement) : undefined
	return { ...otherElement, overlap }
}
