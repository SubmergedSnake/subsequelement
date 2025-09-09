import { Subsequelement } from "../Subsequelement";
import { Bearing, IsHtmlElementLike } from "../types";

const calculateProximity = (startingElement: IsHtmlElementLike, otherElement: IsHtmlElementLike, bearing: keyof typeof Bearing) => {
	const { left: sLeft, right: sRight, top: sTop, bottom: sBottom } = startingElement.getBoundingClientRect()
	const { left: oeLeft, right: oeRight, top: oeTop, bottom: oeBottom } = otherElement.getBoundingClientRect()

	let directionalProximity

	if (['nw', 'n', 'ne', 'sw', 's', 'se'].includes(bearing)) {
		const topProx = Math.min(Math.abs(sTop - oeBottom), Math.abs(sTop - oeTop))
		const bottomProx = Math.min(Math.abs(sBottom - oeTop), Math.abs(sBottom - oeBottom))
		directionalProximity = Math.min(topProx, bottomProx)
	}

	// for east and west
	else {
		const leftProx = Math.min(Math.abs(sLeft - oeRight), Math.abs(sLeft - oeLeft))
		const rightProx = Math.min(Math.abs(sRight - oeLeft), Math.abs(sRight - oeRight))
		directionalProximity = Math.min(leftProx, rightProx)

	}

	const absoluteDirectionalProximity = Math.abs(directionalProximity)
	console.log(`Got absolute directional proximity for other element ${otherElement.id}: ${absoluteDirectionalProximity}`);
	return absoluteDirectionalProximity
	// return Math.abs(Math.min(topProx, bottomProx, leftProx, rightProx))
}




export const addProximity = (startingElement: IsHtmlElementLike, otherElement: IsHtmlElementLike, bearing: keyof typeof Bearing): Omit<Subsequelement, 'alignment'> => {
	return {
		e: otherElement, proximity: calculateProximity(startingElement, otherElement, bearing)
	}
}
