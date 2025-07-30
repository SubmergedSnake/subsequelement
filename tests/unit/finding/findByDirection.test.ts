import { findRight, findLeft, findAbove, findBelow } from "../../../src/finding/findByDirection"
import { simplegrid3by3 } from "../mockLayouts/simpleGrid3by3"
import { unevenGrid3by3 } from "../mockLayouts/unevenGrid3by3"

describe('findByDirection', () => {

	describe('simplegrid3by3', () => {
		describe('findRight', () => {
			test('returns only elements to the right of element one', () => {
				const [one, ...rest] = simplegrid3by3
				const elements = findRight(one, rest)
				expect(elements.map(e => e.id).sort()).toEqual(['four', 'five', 'six', 'seven', 'eight', 'nine'].sort())
			})
		})

		describe('findLeft', () => {
			test('returns only elements to the left of element four', () => {
				const [one, two, three, four, ...rest] = simplegrid3by3
				const elements = findLeft(four, [one, two, three, ...rest])
				expect(elements.map(e => e.id).sort()).toEqual(['one', 'two', 'three'].sort())
			})
		})

		describe('findBelow', () => {
			test('returns only elements below element four', () => {
				const [one, two, three, four, ...rest] = simplegrid3by3
				const elements = findBelow(four, [one, two, three, ...rest])
				expect(elements.map(e => e.id).sort()).toEqual(['two', 'three', 'five', 'six', 'eight', 'nine'].sort())
			})
		})

		describe('findAbove', () => {
			test('returns only elements above element five', () => {
				const [one, two, three, four, five, ...rest] = simplegrid3by3
				const elements = findAbove(five, [one, two, three, four, ...rest])
				expect(elements.map(e => e.id).sort()).toEqual(['one', 'four', 'seven'].sort())
			})
		})
	})


	describe('unevengrid3by3', () => {
		describe('findRight', () => {
			test('returns only elements to the right of element four', () => {
				const [one, two, three, four, ...rest] = unevenGrid3by3
				const elements = findRight(four, rest)
				expect(elements.map(e => e.id).sort()).toEqual(['five', 'six', 'seven', 'eight', 'nine'].sort())
			})
		})

		describe('findLeft', () => {
			test('returns only elements to the left of element four', () => {
				const [one, two, three, four, ...rest] = unevenGrid3by3
				const elements = findLeft(four, [one, two, three, ...rest])
				expect(elements.map(e => e.id).sort()).toEqual(['one', 'two'].sort())
			})
		})

		describe('findBelow', () => {
			test('returns only elements below element four', () => {
				const [one, two, three, four, ...rest] = unevenGrid3by3
				const elements = findBelow(four, [one, two, three, ...rest])
				expect(elements.map(e => e.id).sort()).toEqual(['two', 'three', 'five', 'six', 'eight', 'nine'].sort())
			})
		})

		describe('findAbove', () => {
			test('returns only elements above element five', () => {
				const [one, two, three, four, five, ...rest] = unevenGrid3by3
				const elements = findAbove(five, [one, two, three, four, ...rest])
				expect(elements.map(e => e.id).sort()).toEqual(['one', 'four', 'seven'].sort())
			})
		})
	})
})
