import { findOverlappingElements } from "../../src/findOverlappingElements"
import { simplegrid3by3 } from "./mockLayouts//simpleGrid3by3"
import { unevenGrid3by3 } from "./mockLayouts/unevenGrid3by3"

describe('findOverlappingElements', () => {

	describe('simplegrid3by3', () => {

		/* simplegrid3by3 layout
		*  _____  _____  _____  
		* |     ||     ||     |
		* |one  ||four ||seven|
		* |_____||_____||_____|
		*  _____  _____ ______ 
		* |     ||     ||     |
		* |two  ||five ||eight|
		* |_____||_____||_____|
		*  _____  _____  _____ 
		* |     ||     ||     |
		* |three||six  ||nine |
		* |_____||_____||_____|
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
		*  ___
		* |   |                    _____ 
		* |one|  _____            |     |
		* |___| |     |           |seven|
		*       |four |           |_____|
		*       |_____|
		*  ___                      _____ 
		* |   |          _____     |     |
		* |two|         |     |    |eight|
		* |___|         |five |    |_____|
		*    _____      |_____|
		*   |     |
		*   |three|     ___                    _____ 
		*   |_____|    |   |                  |     |
		*              |six|                  |nine |
		*              |___|                  |_____|
		*
		*/

		test.skip('item one as starting element returns correct overlapping elements', () => {
			const [one, ...others] = unevenGrid3by3
			const overlappingIds = findOverlappingElements(one, others).map(e => e.id)
			console.log(overlappingIds)
			expect(overlappingIds.sort()).toEqual(['two', 'three', 'four', 'seven'].sort())
		})

		// test('item two as starting element returns correct overlapping elements', () => {
		// 	const [one, two, ...others] = unevenGrid3by3
		// 	const overlappingIds = findOverlappingElements(two, [one, ...others]).map(e => e.id)
		// 	expect(overlappingIds.sort()).toEqual(['one', 'three', 'five', 'eight'].sort())
		// })
		//
		// test('item three as starting element returns correct overlapping elements', () => {
		// 	const [one, two, three, ...others] = unevenGrid3by3
		// 	const overlappingIds = findOverlappingElements(three, [one, two, ...others]).map(e => e.id)
		// 	expect(overlappingIds.sort()).toEqual(['one', 'two', 'six', 'nine'].sort())
		// })
		//
		// test('item five as starting element returns correct overlapping elements', () => {
		// 	const [one, two, three, four, five, ...others] = unevenGrid3by3
		// 	const overlappingIds = findOverlappingElements(five, [one, two, three, four, ...others]).map(e => e.id)
		// 	expect(overlappingIds.sort()).toEqual(['two', 'four', 'six', 'eight'].sort())
		// })

	})

})
