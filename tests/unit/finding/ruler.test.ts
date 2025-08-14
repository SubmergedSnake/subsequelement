import { cornerIsWithinBoundaryLines, getLine, overlapsWithStartingElement } from "../../../src/finding/ruler"
import { simplegrid3by3 } from "../mockLayouts/simpleGrid3by3"

describe('ruler', () => {
	describe('elementOverlapsLines', () => {
		it('horizontal lines', () => {
			const [startingElement, anotherElement] = simplegrid3by3
			const pointAbove = { x: 50, y: 100 }
			const pointBelow = { x: 50, y: 300 }
			const startLine = getLine(pointAbove, 0);
			const endLine = getLine(pointBelow, 0);
			const yes = overlapsWithStartingElement(startingElement, anotherElement, 0)
			expect(yes).toBe(true)
		})

		it('vertical lines', () => {
			const point = { x: 200, y: 100 }
			const pointLeft = { x: 100, y: 100 }
			const pointRight = { x: 300, y: 100 }
			const startLine = getLine(pointLeft, 90);
			const endLine = getLine(pointRight, 90);
			// const isBetween = getElementsOnLane(point, startLine, endLine)
			// expect(isBetween).toBe(true)
		})

		it('diagonal lines', () => {
			const point = { x: 0, y: 0 }
			const pointAbove = { x: 100, y: 25 }
			const pointBelow = { x: 0, y: 100 }
			const startLine = getLine(pointAbove, 135);
			const endLine = getLine(pointBelow, 135);
			// const isBetween = getElementsOnLane(point, startLine, endLine)
			// expect(isBetween).toBe(true)
		})
	})
	describe('cornerIsWithinBoundaryLines', () => {

		it('horizontal boundaries', () => {
			const corner = { x: 50, y: 250 }
			const pointAbove = { x: 50, y: 100 }
			const pointBelow = { x: 50, y: 300 }
			const boundaryAbove = getLine(pointAbove, 0); // 0 for horizontal line
			const boundaryBelow = getLine(pointBelow, 0); // 0 for horizontal line
			const isWithin = cornerIsWithinBoundaryLines(corner, boundaryAbove, boundaryBelow)
			expect(isWithin).toBe(true)
		})

		it('vertical boundaries', () => {
			const corner = { x: 300, y: 200 }
			const boundaryLeft = { x: 100, y: 200 }
			const boundaryRight = { x: 300, y: 200 }
			const startLine = getLine(boundaryLeft, 90); // 90 for vertical line
			const endLine = getLine(boundaryRight, 90); // 90 for vertical line
			const isWithin = cornerIsWithinBoundaryLines(corner, startLine, endLine)
			expect(isWithin).toBe(true)
		})

		describe('diagonal boundaries', () => {

			it('topleft', () => {
				const corner = { x: 10, y: 32 }
				const topRight = { x: 418, y: 236 }
				const bottomLeft = { x: 214, y: 440 }
				const topRightBoundary = getLine(topRight, 45); // 45 for diagonal line
				const bottomLeftBoundary = getLine(bottomLeft, 45); // 45 for diagonal line
				const isWithin = cornerIsWithinBoundaryLines(corner, topRightBoundary, bottomLeftBoundary)
				expect(isWithin).toBe(true)
			})

			it.only('topright', () => {
				const corner = { x: 622, y: 32 }
				const topLeft = { x: 214, y: 236 }
				const bottomRight = { x: 418, y: 440 }
				const topRightBoundary = getLine(topLeft, 10); // 45 for diagonal line
				const bottomLeftBoundary = getLine(bottomRight, 10); // 45 for diagonal line
				const isWithin = cornerIsWithinBoundaryLines(corner, topRightBoundary, bottomLeftBoundary)
				expect(isWithin).toBe(true)
			})
		})

	})
})
