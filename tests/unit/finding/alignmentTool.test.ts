import { determineBoundaryCornersByAngle, findAlignedElements } from "../../../src/finding/alignmentTool"
import { indexPageLayout } from "../realLayouts/indexPageLayout"

describe.only('alignmentTool', () => {

	it('finds other elements that align horizontally', () => {
		const [A, ...rest] = indexPageLayout
		const alignedElements = rest.filter(findAlignedElements(A, 0))
		expect(alignedElements.sort().map(e => e.id)).toEqual(['B', 'C'])
	})

	it('finds other elements that align vertically', () => {
		const [A, ...rest] = indexPageLayout
		const alignedElements = rest.filter(findAlignedElements(A, 90))
		expect(alignedElements.sort().map(e => e.id)).toEqual(['D', 'G', 'J', 'N', 'P', 'S'])

	})

	it('finds other elements that align diagonally (top/left -> bottom/right)', () => {
		const [A, B, C, D, E, F, G, H, ...rest] = indexPageLayout
		const alignedElements = [A, B, C, D, E, F, G, ...rest].filter(findAlignedElements(H, 45))
		expect(alignedElements.sort().map(e => e.id)).toEqual(['D', 'L'])
	})

	it('finds other elements that align diagonally (bottom/left -> top/right)', () => {
		const [A, B, C, D, E, F, G, H, ...rest] = indexPageLayout
		const alignedElements = [A, B, C, D, E, F, G, ...rest].filter(findAlignedElements(H, -45))
		expect(alignedElements.sort().map(e => e.id)).toEqual(['F', 'J'])
	})
})

describe('determineBoundariesByAngle', () => {

	it('returns left,top,left,bottom for 0°', async () => {
		const boundaryCorners = determineBoundaryCornersByAngle(0)
		const { begin: { x: beginX, y: beginY }, end: { x: endX, y: endY } } = boundaryCorners
		const corners = [beginX, beginY, endX, endY]
		expect(corners).toEqual(['left', 'top', 'left', 'bottom'])
	})

	it('returns left,top,right,bottom for 45°', async () => {
		const boundaryCorners = determineBoundaryCornersByAngle(45)
		const { begin: { x: beginX, y: beginY }, end: { x: endX, y: endY } } = boundaryCorners
		const corners = [beginX, beginY, endX, endY]
		expect(corners).toEqual(['left', 'top', 'right', 'bottom'])
	})

	it('returns left,top,right,top for 90°', async () => {
		const boundaryCorners = determineBoundaryCornersByAngle(90)
		const { begin: { x: beginX, y: beginY }, end: { x: endX, y: endY } } = boundaryCorners
		const corners = [beginX, beginY, endX, endY]
		expect(corners).toEqual(['left', 'top', 'right', 'top'])
	})

	it('throws error on unsupported angle', () => {
		// @ts-ignore
		expect(() => determineBoundaryCornersByAngle(227)).toThrow()
	})
})
