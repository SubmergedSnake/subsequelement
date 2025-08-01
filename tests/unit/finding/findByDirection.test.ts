import { findEast, findWest, findNorth, findSouth, findNorthEast, findSouthEast, findSouthWest, findNorthWest } from "../../../src/finding/findByDirection"
import { simplegrid3by3 } from "../mockLayouts/simpleGrid3by3"
import { unevenGrid3by3 } from "../mockLayouts/unevenGrid3by3"

describe('findByDirection', () => {

	describe('simplegrid3by3', () => {
		describe('North', () => {
			test('returns only elements north of element five', () => {
				const [one, two, three, four, five, ...rest] = simplegrid3by3
				const elements = findNorth(five, [one, two, three, four, ...rest])
				expect(elements.map(e => e.id).sort()).toEqual(['one', 'four', 'seven'].sort())
			})
		})

		describe('NorthEast', () => {
			test('returns only elements northeast of element five', () => {
				const [one, two, three, four, five, ...rest] = simplegrid3by3
				const elements = findNorthEast(five, [one, two, three, four, ...rest])
				expect(elements.map(e => e.id).sort()).toEqual(['seven'].sort())
			})
		})

		describe('East', () => {
			test('returns only elements east of element one', () => {
				const [one, ...rest] = simplegrid3by3
				const elements = findEast(one, rest)
				expect(elements.map(e => e.id).sort()).toEqual(['four', 'five', 'six', 'seven', 'eight', 'nine'].sort())
			})
		})

		describe('SouthEast', () => {
			test('returns only elements southeast of element one', () => {
				const [one, ...rest] = simplegrid3by3
				const elements = findSouthEast(one, rest)
				expect(elements.map(e => e.id).sort()).toEqual(['five', 'six', 'eight', 'nine'].sort())
			})
		})

		describe('South', () => {
			test('returns only elements south of element four', () => {
				const [one, two, three, four, ...rest] = simplegrid3by3
				const elements = findSouth(four, [one, two, three, ...rest])
				expect(elements.map(e => e.id).sort()).toEqual(['two', 'three', 'five', 'six', 'eight', 'nine'].sort())
			})
		})

		describe('SouthWest', () => {
			test('returns only elements southwest of element four', () => {
				const [one, two, three, four, ...rest] = simplegrid3by3
				const elements = findSouthWest(four, [one, two, three, ...rest])
				expect(elements.map(e => e.id).sort()).toEqual(['two', 'three'].sort())
			})
		})

		describe('West', () => {
			test('returns only elements to the left of element four', () => {
				const [one, two, three, four, ...rest] = simplegrid3by3
				const elements = findWest(four, [one, two, three, ...rest])
				expect(elements.map(e => e.id).sort()).toEqual(['one', 'two', 'three'].sort())
			})
		})

		describe('NorthWest', () => {
			test('returns only elements northwest of element five', () => {
				const [one, two, three, four, five, ...rest] = simplegrid3by3
				const elements = findNorthWest(five, [one, two, three, four, ...rest])
				expect(elements.map(e => e.id).sort()).toEqual(['one'].sort())
			})
		})

	})


	describe('unevengrid3by3', () => {
		describe('East', () => {
			test('returns only elements to the right of element four', () => {
				const [one, two, three, four, ...rest] = unevenGrid3by3
				const elements = findEast(four, rest)
				expect(elements.map(e => e.id).sort()).toEqual(['five', 'six', 'seven', 'eight', 'nine'].sort())
			})
		})

		describe('West', () => {
			test('returns only elements to the left of element four', () => {
				const [one, two, three, four, ...rest] = unevenGrid3by3
				const elements = findWest(four, [one, two, three, ...rest])
				expect(elements.map(e => e.id).sort()).toEqual(['one', 'two'].sort())
			})
		})

		describe('South', () => {
			test('returns only elements below element four', () => {
				const [one, two, three, four, ...rest] = unevenGrid3by3
				const elements = findSouth(four, [one, two, three, ...rest])
				expect(elements.map(e => e.id).sort()).toEqual(['two', 'three', 'five', 'six', 'eight', 'nine'].sort())
			})
		})

		describe('North', () => {
			test('returns only elements above element five', () => {
				const [one, two, three, four, five, ...rest] = unevenGrid3by3
				const elements = findNorth(five, [one, two, three, four, ...rest])
				expect(elements.map(e => e.id).sort()).toEqual(['one', 'four', 'seven'].sort())
			})
		})
	})
})
