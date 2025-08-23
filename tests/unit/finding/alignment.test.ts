import { determineElementCornersForBoundary, findAlignedElements } from "../../../src/finding/alignment"
import { simplegrid } from "../../resources/elements/simplegrid"

describe('alignment', () => {

	it('finds other elements that align horizontally', () => {
		const [A, ...rest] = simplegrid
		const alignedElements = findAlignedElements(A, rest, 0)
		expect(alignedElements.sort().map(e => e.id)).toEqual(['B', 'C'])
	})

	it('finds other elements that align vertically', () => {
		const [A, ...rest] = simplegrid
		const alignedElements = findAlignedElements(A, rest, 90)
		expect(alignedElements.sort().map(e => e.id)).toEqual(['D', 'G', 'J', 'N', 'P', 'S'])

	})

	it('finds other elements that align diagonally (top/left -> bottom/right)', () => {
		const [A, B, C, D, E, F, G, H, ...rest] = simplegrid
		const alignedElements = findAlignedElements(H, [A, B, C, D, E, F, G, ...rest], 45)
		expect(alignedElements.sort().map(e => e.id)).toEqual(['A', 'D', 'E', 'G', 'I', 'K', 'L', 'O'])
	})

	it('finds other elements that align diagonally (bottom/left -> top/right)', () => {
		const [A, B, C, D, E, F, G, H, ...rest] = simplegrid
		const alignedElements = findAlignedElements(H, [A, B, C, D, E, F, G, ...rest], -45)
		expect(alignedElements.sort().map(e => e.id)).toEqual(['C', 'E', 'F', 'G', 'I', 'J', 'K', 'N'])
	})
})

describe('determineBoundariesByAngle', () => {

	it('returns left,bottom,right,top for 45°', async () => {
		const boundaryCorners = determineElementCornersForBoundary(45)
		const { bottomBoundary: { x: bottomX, y: bottomY }, topBoundary: { x: topX, y: topY } } = boundaryCorners
		const corners = [bottomX, bottomY, topX, topY]
		expect(corners).toEqual(['left', 'bottom', 'right', 'top'])
	})

	it('returns right,bottom,left,top for -45°', async () => {
		const boundaryCorners = determineElementCornersForBoundary(-45)
		const { bottomBoundary: { x: bottomX, y: bottomY }, topBoundary: { x: topX, y: topY } } = boundaryCorners
		const corners = [bottomX, bottomY, topX, topY]
		expect(corners).toEqual(['right', 'bottom', 'left', 'top'])
	})

	it('throws error on unsupported angle', () => {
		// @ts-ignore
		expect(() => determineElementCornersForBoundary(227)).toThrow()
	})
})
