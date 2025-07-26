import { findOverlappingElements } from "../../src/findOverlappingElements"
import { simplegrid3by3 } from "./mocks/simpleGrid3by3"

describe('findOverlappingElements', () => {

	describe('simplegrid3by3', () => {

		test('item one as starting element returns correct overlapping elements', () => {
			const [one, ...others] = simplegrid3by3
			const overlappingIds = findOverlappingElements(one, others).map(e => e.id)
			console.log(overlappingIds)
			expect(overlappingIds.sort()).toEqual(['two', 'three', 'four', 'seven'].sort())
		})

		test('item two as starting element returns correct overlapping elements', () => {
			const [one, two, ...others] = simplegrid3by3
			const overlappingIds = findOverlappingElements(two, [one, ...others]).map(e => e.id)
			console.log(overlappingIds)
			expect(overlappingIds.sort()).toEqual(['one', 'three', 'five', 'eight'].sort())
		})

	})

})
