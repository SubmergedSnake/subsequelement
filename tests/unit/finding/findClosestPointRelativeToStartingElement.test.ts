import { findClosestPointRelativeToStartingElement } from "../../../src/finding/findClosestPointRelativeToStartingElement"
import { simplegrid3by3 } from "../mockLayouts/simpleGrid3by3"
import { unevenGrid3by3 } from "../mockLayouts/unevenGrid3by3"

describe('findClosestPointRelativeToStartingElement', () => {

	describe('simplegrid3by3', () => {
		test('x: 0, y: 200 the closest point of itemThree to itemOne', () => {
			const [itemOne, , itemThree] = simplegrid3by3
			const result = findClosestPointRelativeToStartingElement(itemOne, itemThree)
			expect(result.corner).toEqual({ x: 0, y: 100 })
		})
	})

	describe('unevenGrid3by3', () => {
		test('x: 150, y: 400 the closest point of itemThree to itemOne', () => {
			const [itemOne, , itemThree] = unevenGrid3by3
			const result = findClosestPointRelativeToStartingElement(itemOne, itemThree)
			expect(result.corner).toEqual({ x: 150, y: 400 })
		})
	})
})
