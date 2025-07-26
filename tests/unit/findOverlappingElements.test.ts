import { findOverlappingElements } from "../../src/findOverlappingElements"
import { simplegrid3by3 } from "./mockLayouts//simpleGrid3by3"

describe('findOverlappingElements', () => {

	describe('simplegrid3by3', () => {

		/* simplegrid3by3 layout
		*
		*  one | four | seven
		*  two | five | eight
		*  three | six | nine
		*/

		test('item one as starting element returns correct overlapping elements', () => {
			const [one, ...others] = simplegrid3by3
			const overlappingIds = findOverlappingElements(one, others).map(e => e.id)
			expect(overlappingIds.sort()).toEqual(['two', 'three', 'four', 'seven'].sort())
		})

		test('item two as starting element returns correct overlapping elements', () => {
			const [one, two, ...others] = simplegrid3by3
			const overlappingIds = findOverlappingElements(two, [one, ...others]).map(e => e.id)
			expect(overlappingIds.sort()).toEqual(['one', 'three', 'five', 'eight'].sort())
		})

		test('item three as starting element returns correct overlapping elements', () => {
			const [one, two, three, ...others] = simplegrid3by3
			const overlappingIds = findOverlappingElements(three, [one, two, ...others]).map(e => e.id)
			expect(overlappingIds.sort()).toEqual(['one', 'two', 'six', 'nine'].sort())
		})

		test('item five as starting element returns correct overlapping elements', () => {
			const [one, two, three, four, five, ...others] = simplegrid3by3
			const overlappingIds = findOverlappingElements(five, [one, two, three, four, ...others]).map(e => e.id)
			expect(overlappingIds.sort()).toEqual(['two', 'four', 'six', 'eight'].sort())
		})

	})

	describe('unevengrid3by3', () => {

		/* unevengrid3by3 layout 
		  *
		*  one | four | seven
		*  two | five | eight
		*  three | six | nine
		*/

		test('item one as starting element returns correct overlapping elements', () => {
			const [one, ...others] = simplegrid3by3
			const overlappingIds = findOverlappingElements(one, others).map(e => e.id)
			expect(overlappingIds.sort()).toEqual(['two', 'three', 'four', 'seven'].sort())
		})

		test('item two as starting element returns correct overlapping elements', () => {
			const [one, two, ...others] = simplegrid3by3
			const overlappingIds = findOverlappingElements(two, [one, ...others]).map(e => e.id)
			expect(overlappingIds.sort()).toEqual(['one', 'three', 'five', 'eight'].sort())
		})

		test('item three as starting element returns correct overlapping elements', () => {
			const [one, two, three, ...others] = simplegrid3by3
			const overlappingIds = findOverlappingElements(three, [one, two, ...others]).map(e => e.id)
			expect(overlappingIds.sort()).toEqual(['one', 'two', 'six', 'nine'].sort())
		})

		test('item five as starting element returns correct overlapping elements', () => {
			const [one, two, three, four, five, ...others] = simplegrid3by3
			const overlappingIds = findOverlappingElements(five, [one, two, three, four, ...others]).map(e => e.id)
			expect(overlappingIds.sort()).toEqual(['two', 'four', 'six', 'eight'].sort())
		})

	})

})
