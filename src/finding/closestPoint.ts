import { HasIdAndElementCoords } from "../types";

export type ClosestPoint = {
	corner: { x: number, y: number }
	distance: number
}

export const findClosestPointRelativeToStartingElement =
	(startingElement: HasIdAndElementCoords, otherElement: HasIdAndElementCoords): ClosestPoint => {

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

		const distances = Object.values(startingElementCorners).map(startingCorner => {
			return Object.values(otherElementCorners).map(otherCorner => {
				return {
					corner: otherCorner, distance: Math.hypot(startingCorner.x - otherCorner.x, startingCorner.y - otherCorner.y)
				}
			})
		}).flat()

		return distances.reduce((acc, curr) => {
			if (curr.distance < acc.distance) return curr
			return acc

		})
	}
