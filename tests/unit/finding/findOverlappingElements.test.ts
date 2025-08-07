import { simplegrid3by3 } from "../mockLayouts/simpleGrid3by3"
import { unevenGrid3by3 } from "../mockLayouts/unevenGrid3by3"
import { findOverlappingElements } from "../../../src/finding/findOverlappingElements"

describe('findOverlappingElements', () => {
	describe('simplegrid3by3', () => {

		test.only('cos test', () => {
			const [one, ...others] = simplegrid3by3
			const { height, top, bottom, right, left, width } = one.getBoundingClientRect()
			const fourtyFiveDegrees = Math.PI / 4
			const diagonalLength = height / Math.cos(fourtyFiveDegrees)
			const hypo = Math.hypot(height, width)
			console.log(`height: ${height}, diagonal length: ${diagonalLength}, hypo ${hypo}`)
		})

		test('starting element one returns two, three, four and seven', () => {
			const [one, ...others] = simplegrid3by3
			const overlappingIds = findOverlappingElements(one, others).map(e => e.id)
			expect(overlappingIds.sort()).toEqual(['two', 'three', 'four', 'seven'].sort())
		})

		test('starting element two returns one, three, five and eight', () => {
			const [one, two, ...others] = simplegrid3by3
			const overlappingIds = findOverlappingElements(two, [one, ...others]).map(e => e.id)
			expect(overlappingIds.sort()).toEqual(['one', 'three', 'five', 'eight'].sort())
		})

		test('starting element three returns one, two, six and nine', () => {
			const [one, two, three, ...others] = simplegrid3by3
			const overlappingIds = findOverlappingElements(three, [one, two, ...others]).map(e => e.id)
			expect(overlappingIds.sort()).toEqual(['one', 'two', 'six', 'nine'].sort())
		})

		test('starting element five returns two, four, six and eight', () => {
			const [one, two, three, four, five, ...others] = simplegrid3by3
			const overlappingIds = findOverlappingElements(five, [one, two, three, four, ...others]).map(e => e.id)
			expect(overlappingIds.sort()).toEqual(['two', 'four', 'six', 'eight'].sort())
		})

	})

	describe('unevengrid3by3', () => {

		test('starting element one returns two, four and seven', () => {
			const [one, ...others] = unevenGrid3by3
			const overlappingIds = findOverlappingElements(one, others).map(e => e.id)
			expect(overlappingIds.sort()).toEqual(['two', 'four', 'seven'].sort())
		})

		test('starting element two returns one, five and eight', () => {
			const [one, two, ...others] = unevenGrid3by3
			const overlappingIds = findOverlappingElements(two, [one, ...others]).map(e => e.id)
			expect(overlappingIds.sort()).toEqual(['one', 'five', 'eight'].sort())
		})

		test('starting element three returns five, four, nine and six', () => {
			const [one, two, three, ...others] = unevenGrid3by3
			const overlappingIds = findOverlappingElements(three, [one, two, ...others]).map(e => e.id)
			expect(overlappingIds.sort()).toEqual(['five', 'four', 'nine', 'six'].sort())
		})

		test('starting element five returns two, three, six and eight', () => {
			const [one, two, three, four, five, ...others] = unevenGrid3by3
			const overlappingIds = findOverlappingElements(five, [one, two, three, four, ...others]).map(e => e.id)
			expect(overlappingIds.sort()).toEqual(['two', 'three', 'six', 'eight'].sort())
		})

	})

})
