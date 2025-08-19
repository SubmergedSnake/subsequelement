import { findClosestPointRelativeToStartingElement } from "../../../src/finding/closestPoint"
import { simplegrid3by3 } from "../mockLayouts/simpleGrid3by3"
import { unevenGrid3by3 } from "../mockLayouts/unevenGrid3by3"
import { indexPageLayout } from "../realLayouts/indexPageLayout"

describe('findClosestPointRelativeToStartingElement', () => {

	describe('indexPageLayout', () => {
		test('x: 0, y: 200 the closest point of itemThree to itemOne', () => {
			const [itemOne, , itemThree] = indexPageLayout
			const result = findClosestPointRelativeToStartingElement(itemOne, itemThree)
			expect(result.corner).toEqual({ x: 0, y: 100 })
		})
	})

	describe('indexPageLayout', () => {
		test('x: 150, y: 400 the closest point of itemThree to itemOne', () => {
			const [itemOne, , itemThree] = indexPageLayout
			const result = findClosestPointRelativeToStartingElement(itemOne, itemThree)
			expect(result.corner).toEqual({ x: 150, y: 400 })
		})
	})
})
