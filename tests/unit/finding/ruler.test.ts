import { cornerIsWithinBoundaryLines, getBoundary, overlapsWithStartingElement } from "../../../src/finding/ruler"
import { simplegrid3by3 } from "../mockLayouts/simpleGrid3by3"

describe('ruler', () => {
	describe('elementOverlapsLines', () => {
		it('horizontal lines', () => {
			const [startingElement, anotherElement] = simplegrid3by3
			const pointAbove = { x: 50, y: 100 }
			const pointBelow = { x: 50, y: 300 }
			const startLine = getBoundary(pointAbove, 0);
			const endLine = getBoundary(pointBelow, 0);
			const yes = overlapsWithStartingElement(startingElement, anotherElement, 0)
			expect(yes).toBe(true)
		})

		it('vertical lines', () => {
			const point = { x: 200, y: 100 }
			const pointLeft = { x: 100, y: 100 }
			const pointRight = { x: 300, y: 100 }
			const startLine = getBoundary(pointLeft, 90);
			const endLine = getBoundary(pointRight, 90);
			// const isBetween = getElementsOnLane(point, startLine, endLine)
			// expect(isBetween).toBe(true)
		})

		it('diagonal lines', () => {
			const point = { x: 0, y: 0 }
			const pointAbove = { x: 100, y: 25 }
			const pointBelow = { x: 0, y: 100 }
			const startLine = getBoundary(pointAbove, 135);
			const endLine = getBoundary(pointBelow, 135);
			// const isBetween = getElementsOnLane(point, startLine, endLine)
			// expect(isBetween).toBe(true)
		})
	})
	describe('cornerIsWithinBoundaryLines', () => {

		it('horizontal boundaries', () => {
			const corner = { x: 50, y: 250 }
			const pointAbove = { x: 50, y: 100 }
			const pointBelow = { x: 50, y: 300 }
			const boundaryAbove = getBoundary(pointAbove, 0); // 0 for horizontal line
			const boundaryBelow = getBoundary(pointBelow, 0); // 0 for horizontal line
			const isWithin = cornerIsWithinBoundaryLines(corner, boundaryAbove, boundaryBelow)
			expect(isWithin).toBe(true)
		})

		it('vertical boundaries', () => {
			const corner = { x: 300, y: 200 }
			const boundaryLeft = { x: 100, y: 200 }
			const boundaryRight = { x: 300, y: 200 }
			const startLine = getBoundary(boundaryLeft, 90); // 90 for vertical line
			const endLine = getBoundary(boundaryRight, 90); // 90 for vertical line
			const isWithin = cornerIsWithinBoundaryLines(corner, startLine, endLine)
			expect(isWithin).toBe(true)
		})

		describe('diagonal boundaries', () => {

			it('topleft', () => {
				const corner = { x: 10, y: 32 }
				const topRight = { x: 418, y: 236 }
				const bottomLeft = { x: 214, y: 440 }
				const topRightBoundary = getBoundary(topRight, 45); // 45 for diagonal line
				const bottomLeftBoundary = getBoundary(bottomLeft, 45); // 45 for diagonal line
				const isWithin = cornerIsWithinBoundaryLines(corner, topRightBoundary, bottomLeftBoundary)
				expect(isWithin).toBe(true)
			})

			it.only('topright', () => {
				const corner = { x: 622, y: 32 }
				const topLeft = { x: 214, y: 236 }
				const bottomRight = { x: 418, y: 440 }
				const topRightBoundary = getBoundary(topLeft, 10); // 45 for diagonal line
				const bottomLeftBoundary = getBoundary(bottomRight, 10); // 45 for diagonal line
				const isWithin = cornerIsWithinBoundaryLines(corner, topRightBoundary, bottomLeftBoundary)
				expect(isWithin).toBe(true)
			})
		})

	})
})
