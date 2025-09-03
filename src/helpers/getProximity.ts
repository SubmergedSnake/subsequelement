import { Subsequelement } from "../../Subsequelement";
import { Bearing, IsHtmlElementLike } from "../types";


export const getProximity = (startingElement: IsHtmlElementLike, otherElement: Subsequelement): Subsequelement => {


	type Side = keyof ReturnType<IsHtmlElementLike['getBoundingClientRect']>
	type Corner = {
		x: Side
		y: Side
	}

	const sidePairs: Corner[] = [{ x: 'left', y: 'top' }, { x: 'right', y: 'top' }, { x: 'right', y: 'bottom' }, { x: 'left', y: 'bottom' }]
	const proximity = sidePairs.map((corner: Corner) => {
		const { x, y } = corner
		const startingElementCorner = { x: startingElement.getBoundingClientRect()[x] as number, y: startingElement.getBoundingClientRect()[y] as number }
		return sidePairs.map((corner: Corner) => {
			const { x, y } = corner
			const otherElementCorner = { x: otherElement.e.getBoundingClientRect()[x] as number, y: otherElement.e.getBoundingClientRect()[y] as number }
			return Math.hypot(startingElementCorner.x - otherElementCorner.x, startingElementCorner.y - otherElementCorner.y)
		})
	}).flat().reduce((acc, curr) => curr < acc ? curr : acc)
	return {
		...otherElement, proximity: proximity
	}
}

