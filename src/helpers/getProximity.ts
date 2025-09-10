import { Subsequelement } from "../Subsequelement";
import { Bearing, IsHtmlElementLike } from "../types";

// const calculateProximity = (startingElement: IsHtmlElementLike, otherElement: IsHtmlElementLike, bearing: keyof typeof Bearing): number => {
const calculateProximity = (startingElement: IsHtmlElementLike, otherElement: IsHtmlElementLike): number => {
	const { left: sLeft, right: sRight, top: sTop, bottom: sBottom, height: sHeight, width: sWidth } = startingElement.getBoundingClientRect()
	const { left: oeLeft, right: oeRight, top: oeTop, bottom: oeBottom, height: oeHeight, width: oeWidth } = otherElement.getBoundingClientRect()

	const verticalTotalRange = Math.abs(Math.min(oeTop, sTop) - Math.max(oeBottom, sBottom))
	const verticalDistance = verticalTotalRange - sHeight - oeHeight

	// console.log(`verticalTotalRange: ${verticalTotalRange}`);
	// console.log(`verticalDistance: ${verticalDistance}`)

	const horizontalTotalRange = Math.abs(Math.min(oeLeft, sLeft) - Math.max(oeRight, sRight))
	const horizontalDistance = horizontalTotalRange - sWidth - oeWidth
	// console.log(`horizontalTotalRange: ${horizontalTotalRange}`);
	// console.log(`horizontalTotalDistance: ${horizontalDistance}`)

	return horizontalDistance + verticalDistance




	//
	// let directionalProximity
	// console.log(`Getting proximity for bearing: ${bearing}`);
	//
	//
	// if (['nw', 'n', 'ne', 'sw', 's', 'se'].includes(bearing)) {
	// 	const topProx = Math.min(Math.abs(sTop - oeBottom), Math.abs(sTop - oeTop))
	// 	console.log(`topProx: ${topProx}`);
	//
	// 	const bottomProx = Math.min(Math.abs(sBottom - oeTop), Math.abs(sBottom - oeBottom))
	// 	console.log(`bottomProx: ${bottomProx}`);
	// 	directionalProximity = Math.min(topProx, bottomProx)
	// }
	//
	// // for east and west
	// else {
	// 	const leftProx = Math.min(Math.abs(sLeft - oeRight), Math.abs(sLeft - oeLeft))
	// 	console.log(`leftProx: ${leftProx}`);
	// 	const rightProx = Math.min(Math.abs(sRight - oeLeft), Math.abs(sRight - oeRight))
	// 	console.log(`rightProx: ${rightProx}`);
	// 	directionalProximity = Math.min(leftProx, rightProx)
	//
	// }
	//
	// const absoluteDirectionalProximity = Math.abs(directionalProximity)
	// // console.log(`Got absolute directional proximity for other element ${otherElement.id}: ${absoluteDirectionalProximity} `);
	// return absoluteDirectionalProximity
	// return Math.abs(Math.min(topProx, bottomProx, leftProx, rightProx))
}




// export const addProximity = (startingElement: IsHtmlElementLike, otherElement: IsHtmlElementLike, bearing: keyof typeof Bearing): Omit<Subsequelement, 'alignment'> => {
export const addProximity = (startingElement: IsHtmlElementLike, otherElement: IsHtmlElementLike): Omit<Subsequelement, 'alignment'> => {
	return {
		e: otherElement, proximity: calculateProximity(startingElement, otherElement)
	}
}
