import { HasIdAndElementCoords } from "../types";

export const getElementDistance =
	(startingElement: HasIdAndElementCoords, otherElement: HasIdAndElementCoords): { element: HasIdAndElementCoords, distance: number } => {

		const { left: otherLeft, right: otherRight, top: otherTop, bottom: otherBottom } = otherElement
		const { left: startingLeft, right: startingRight, top: startingTop, bottom: startingBottom } = startingElement

		const startingElementCorners = {
			topLeft: { x: startingLeft, y: startingTop },
			topRight: { x: startingRight, y: startingTop },
			bottomLeft: { x: startingLeft, y: startingBottom },
			bottomRight: { x: startingRight, y: startingBottom }
		}

		const otherElementCorners = {
			topLeft: { x: otherLeft, y: otherTop },
			topRight: { x: otherRight, y: otherTop },
			bottomLeft: { x: otherLeft, y: otherBottom },
			bottomRight: { x: otherRight, y: otherBottom }
		}

		const totalDistance = Object.entries(startingElementCorners).map(([key, sCorner]) => {
			const oCorner = otherElementCorners[key as keyof typeof otherElementCorners]
			return Math.hypot(sCorner.x - oCorner.x, sCorner.y - oCorner.y)
		}).reduce((acc, curr) => acc + curr)

		return { element: otherElement, distance: totalDistance }
	}
