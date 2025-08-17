import { determineBoundaryCornersByAngle, findAlignedElements } from "../../../src/finding/alignmentTool"
import { HasIdAndElementCoords } from "../../../src/types"
import { indexPageLayout } from "../realLayouts/indexPageLayout"

describe.only('alignmentTool', () => {

	it.only('finds other elements that align horizontally', () => {
		const [A] = indexPageLayout
		const alignedElements = indexPageLayout.slice(0, 6).filter(findAlignedElements(A, 0))
		console.log(alignedElements)
	})

	it('finds other elements that align vertically', () => {
		const [otherElement, startingPoint] = indexPageLayout
		// const areAligned = elementsAreAligned(startingPoint, otherElement, 90)
		// expect(areAligned).toBe(true)

	})

	it.only('finds other elements that align diagonally (top/left -> bottom/right)', () => {
		const [otherElement, , , , startingPoint] = indexPageLayout
		// const areAligned = elementsAreAligned(startingPoint, otherElement, 45)
		// expect(areAligned).toBe(true)

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

	it('returns right,top,left,bottom for 135°', async () => {
		const boundaryCorners = determineBoundaryCornersByAngle(135)
		const { begin: { x: beginX, y: beginY }, end: { x: endX, y: endY } } = boundaryCorners
		const corners = [beginX, beginY, endX, endY]
		expect(corners).toEqual(['right', 'top', 'left', 'bottom'])

	})

	it('throws error on unsupported angle', () => {
		// @ts-ignore
		expect(() => determineBoundaryCornersByAngle(227)).toThrow()
	})
})
