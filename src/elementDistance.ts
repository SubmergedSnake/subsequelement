import { Bearing, ElementWithAlignment, IsHtmlElementLike } from "./types";

export const getElementDistanceDirectional = (startingElement: IsHtmlElementLike, otherElement: ElementWithAlignment, bearing: keyof typeof Bearing) => {
	const { left: otherLeft, right: otherRight, top: otherTop, bottom: otherBottom } = otherElement.e.getBoundingClientRect()
	const { left: startingLeft, right: startingRight, top: startingTop, bottom: startingBottom } = startingElement.getBoundingClientRect()


	switch (bearing) {
		case 'e':
			return { element: otherElement, distance: Math.abs(startingRight - otherLeft) }
		case 's':
			return { element: otherElement, distance: Math.abs(otherTop - startingBottom) }
		case 'w':
			return { element: otherElement, distance: Math.abs(otherRight - startingLeft) }
		case 'n':
			return { element: otherElement, distance: Math.abs(otherBottom - startingTop) }
		case 'ne':
			return { element: otherElement, distance: Math.hypot(startingRight - otherLeft, startingTop - otherBottom) }
		case 'nw':
			return { element: otherElement, distance: Math.hypot(startingLeft - otherRight, startingTop - otherBottom) }
		case 'se':
			return { element: otherElement, distance: Math.hypot(startingRight - otherLeft, startingBottom - otherTop) }
		case 'sw':
			return { element: otherElement, distance: Math.hypot(startingLeft - otherRight, startingBottom - otherTop) }
		default: throw new Error('Unsupported Bearing value for getElementDistance provided')
	}
}


// TODO - should consider distances in the same way that is done above, in getElementDistanceDirectional, because an 
// element can be close(st) even if it's corners aren't = big element
// export const getElementDistanceHypot =
// 	(startingElement: IsHtmlElementLike, otherElement: ElementWithAlignment): { element: ElementWithAlignment, distance: number } => {
//
// 		const { left: otherLeft, right: otherRight, top: otherTop, bottom: otherBottom } = otherElement.e
// 		const { left: startingLeft, right: startingRight, top: startingTop, bottom: startingBottom } = startingElement
//
// 		const startingElementCorners = {
// 			topLeft: { x: startingLeft, y: startingTop },
// 			topRight: { x: startingRight, y: startingTop },
// 			bottomLeft: { x: startingLeft, y: startingBottom },
// 			bottomRight: { x: startingRight, y: startingBottom }
// 		}
//
// 		const otherElementCorners = {
// 			topLeft: { x: otherLeft, y: otherTop },
// 			topRight: { x: otherRight, y: otherTop },
// 			bottomLeft: { x: otherLeft, y: otherBottom },
// 			bottomRight: { x: otherRight, y: otherBottom }
// 		}
//
// 		const totalDistance = Object.entries(startingElementCorners).map(([key, sCorner]) => {
// 			const oCorner = otherElementCorners[key as keyof typeof otherElementCorners]
// 			return Math.hypot(sCorner.x - oCorner.x, sCorner.y - oCorner.y)
// 		}).reduce((acc, curr) => acc + curr)
//
// 		return { element: otherElement, distance: totalDistance }
// 	}
