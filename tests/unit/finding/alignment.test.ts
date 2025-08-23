import { determineBoundaryCornersByAngle, findAlignedElements } from "../../../src/finding/alignment"
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

	it.only('finds other elements that align diagonally (top/left -> bottom/right)', () => {
		const [A, B, C, D, E, F, G, H, ...rest] = simplegrid
		const alignedElements = findAlignedElements(H, [A, B, C, D, E, F, G, ...rest], 45)
		expect(alignedElements.sort().map(e => e.id)).toEqual(['D', 'L'])
	})

	it('finds other elements that align diagonally (bottom/left -> top/right)', () => {
		const [A, B, C, D, E, F, G, H, ...rest] = simplegrid
		const alignedElements = findAlignedElements(H, [A, B, C, D, E, F, G, ...rest], -45)
		expect(alignedElements.sort().map(e => e.id)).toEqual(['F', 'J'])
	})
})

describe.skip('determineBoundariesByAngle', () => {

	it('returns right,top,left,bottom for 45°', async () => {
		const boundaryCorners = determineBoundaryCornersByAngle(45)
		const { leftBoundary: { x: beginX, y: beginY }, rightBoundary: { x: endX, y: endY } } = boundaryCorners
		const corners = [beginX, beginY, endX, endY]
		expect(corners).toEqual(['right', 'top', 'left', 'bottom'])
	})

	it('returns right,top,left,bottom for -45°', async () => {
		const boundaryCorners = determineBoundaryCornersByAngle(45)
		const { leftBoundary: { x: beginX, y: beginY }, rightBoundary: { x: endX, y: endY } } = boundaryCorners
		const corners = [beginX, beginY, endX, endY]
		expect(corners).toEqual(['right', 'top', 'left', 'bottom'])
	})

	it('throws error on unsupported angle', () => {
		// @ts-ignore
		expect(() => determineBoundaryCornersByAngle(227)).toThrow()
	})
})
