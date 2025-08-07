import { getLine, pointIsBetweenLines } from "../../src/finding/ruler";

describe('ruler', () => {
	describe('pointIsBetweenLines', () => {
		it('horizontal lines', () => {
			const point = { x: 50, y: 200 }
			const pointAbove = { x: 50, y: 100 }
			const pointBelow = { x: 50, y: 300 }
			const startLine = getLine(pointAbove, 0);
			const endLine = getLine(pointBelow, 0);
			const isBetween = pointIsBetweenLines(point, startLine, endLine)
			expect(isBetween).toBe(true)
		})

		it('vertical lines', () => {
			const point = { x: 200, y: 100 }
			const pointLeft = { x: 100, y: 100 }
			const pointRight = { x: 300, y: 100 }
			const startLine = getLine(pointLeft, 90);
			const endLine = getLine(pointRight, 90);
			const isBetween = pointIsBetweenLines(point, startLine, endLine)
			expect(isBetween).toBe(true)
		})

		it.only('diagonal lines', () => {
			const point = { x: 0, y: 0 }
			const pointAbove = { x: 100, y: 100 }
			const pointBelow = { x: 300, y: 200 }
			const startLine = getLine(pointAbove, 45);
			const endLine = getLine(pointBelow, 45);
			const isBetween = pointIsBetweenLines(point, startLine, endLine)
			expect(isBetween).toBe(true)
		})
	})
})
