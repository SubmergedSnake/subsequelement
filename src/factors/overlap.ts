import { SubsequElement } from "../types";

const calculateOverlap = (startingHTMLElement: HTMLElement, subsequElement: SubsequElement) => {
	const { left: sLeft, top: sTop, height: sHeight, width: sWidth } = startingHTMLElement.getBoundingClientRect()
	const { left: oeLeft, top: oeTop, height: oeHeight, width: oeWidth } = subsequElement.e.getBoundingClientRect()

	const overlapX = Math.max(0, Math.min(sLeft + sWidth, oeLeft + oeWidth) - Math.max(sLeft, oeLeft));
	const overlapY = Math.max(0, Math.min(sTop + sHeight, oeTop + oeHeight) - Math.max(sTop, oeTop));

	return overlapX * overlapY
}

const checkOverlap = (startingHTMLElement: HTMLElement, subsequElement: SubsequElement) => {
	const { left: sLeft, top: sTop, height: sHeight, width: sWidth } = startingHTMLElement.getBoundingClientRect()
	const { left: oeLeft, top: oeTop, height: oeHeight, width: oeWidth } = subsequElement.e.getBoundingClientRect()

	if (sLeft + sWidth <= oeLeft || oeLeft + oeWidth <= sLeft) {
		return false;
	}
	if (sTop + sHeight <= oeTop || oeTop + oeHeight <= sTop) {
		return false;
	}
	return true;
}

export const addOverlap = (startingHTMLElement: HTMLElement, subsequElement: SubsequElement): SubsequElement => {
	const overlap = checkOverlap(startingHTMLElement, subsequElement) ? calculateOverlap(startingHTMLElement, subsequElement) : undefined
	return { ...subsequElement, overlap }
}
