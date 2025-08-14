import { thereIsOverlap } from "../../../src/finding/overlapTool"
import { simplegrid3by3 } from "../mockLayouts/simpleGrid3by3"

describe('overlapTool', () => {

	it('finds that element on horizontal grid overlaps', () => {
		const [startingPoint, , , otherElement] = simplegrid3by3
		const doesOverlap = thereIsOverlap(startingPoint, otherElement, 0)
		expect(doesOverlap).toBe(true)

	})

	it('finds that element on vertical grid overlaps', () => {
		const [otherElement, startingPoint] = simplegrid3by3
		const doesOverlap = thereIsOverlap(startingPoint, otherElement, 90)
		expect(doesOverlap).toBe(true)

	})

	it('finds that element on diagonal grid overlaps', () => {

	})
})
