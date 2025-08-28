import { Bearing, ElementWithAlignment, IsHtmlElementLike } from "../types";

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

