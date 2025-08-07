import { simplegrid3by3 } from "../mockLayouts/simpleGrid3by3"
import { getLine, pointIsBetweenLines } from "../../../src/finding/ruler";

describe('findOverlappingReloaded', () => {
	test.skip('', () => {

		const origin = { x: 50, y: 100 }
		const anotherPoint = { x: 47, y: 101 }
		// const m = Math.PI / 4;
		// const originDiagonal = origin.y - m * origin.x;
		//
		//
		// // Calculate the y-value of the diagonal line at anotherPoint.x
		// const lineY = m * anotherPoint.x + originDiagonal;
		// Determine if anotherPoint is above or below the line


		const originLine = getLine(origin, 45)
		// const isBetween = pointIsBetweenLines(anotherPoint, originLine)

		const [first] = simplegrid3by3;

	})
})
