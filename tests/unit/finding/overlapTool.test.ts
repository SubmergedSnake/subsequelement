import { determineBoundaryCornersByAngle, elementsAreAligned } from "../../../src/finding/overlapTool"
import { simplegrid3by3 } from "../mockLayouts/simpleGrid3by3"

describe.only('overlapTool', () => {

	it('finds that element on horizontal grid overlaps', () => {
		const [startingPoint, , , otherElement] = simplegrid3by3
		const areAligned = elementsAreAligned(startingPoint, otherElement, 0)
		expect(areAligned).toBe(true)

	})

	it('finds that element on vertical grid overlaps', () => {
		const [otherElement, startingPoint] = simplegrid3by3
		const areAligned = elementsAreAligned(startingPoint, otherElement, 90)
		expect(areAligned).toBe(true)

	})

	it('finds that element on diagonal grid overlaps', () => {
		const [otherElement, , , , startingPoint] = simplegrid3by3
		const areAligned = elementsAreAligned(startingPoint, otherElement, 135)
		expect(areAligned).toBe(true)

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
