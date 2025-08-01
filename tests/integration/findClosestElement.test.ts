import { findClosestElement } from "../../src/finding/findClosestElement"
import { Direction, Strategy } from "../../src/types"
import { simplegrid3by3 } from "../unit/mockLayouts/simpleGrid3by3"
import { unevenGrid3by3 } from "../unit/mockLayouts/unevenGrid3by3"

describe('findClosestElement', () => {

	describe('simplegrid3by3', () => {

		describe('to the right', () => {

			test('returns element five for element two', () => {

				const elements = [...simplegrid3by3]
				const [elementTwo] = elements.splice(1, 1);

				const element = findClosestElement(elementTwo, elements, Direction.EAST, Strategy.STRICT)
				expect(element.id).toEqual('five')

			})
		})

		describe('to the left', () => {

			test('returns element four for element seven', () => {

				const elements = [...simplegrid3by3]
				const [elementSeven] = elements.splice(6, 1);

				const element = findClosestElement(elementSeven, elements, Direction.WEST, Strategy.STRICT)
				expect(element.id).toEqual('four')

			})
		})

		describe('below', () => {

			test('returns element five for element four', () => {

				const elements = [...simplegrid3by3]
				const [elementFour] = elements.splice(3, 1);

				const element = findClosestElement(elementFour, elements, Direction.SOUTH, Strategy.STRICT)
				expect(element.id).toEqual('five')

			})
		})

		describe('above', () => {

			test('returns element eight for element nine', () => {

				const elements = [...simplegrid3by3]
				const [elementNine] = elements.splice(8, 1);

				const element = findClosestElement(elementNine, elements, Direction.NORTH, Strategy.STRICT)
				expect(element.id).toEqual('eight')

			})
		})

	})

	describe('unevengrid3by3', () => {

		describe('to the right', () => {

			test('returns element five for element two', () => {

				const elements = [...unevenGrid3by3]
				const [elementTwo] = elements.splice(1, 1);

				const element = findClosestElement(elementTwo, elements, Direction.EAST, Strategy.STRICT)
				expect(element.id).toEqual('five')

			})
		})

		describe('to the left', () => {

			test('returns element four for element seven', () => {

				const elements = [...unevenGrid3by3]
				const [elementSeven] = elements.splice(6, 1);

				const element = findClosestElement(elementSeven, elements, Direction.WEST, Strategy.STRICT)
				expect(element.id).toEqual('four')

			})
		})

		describe('below', () => {

			test('returns element three for element four', () => {

				const elements = [...unevenGrid3by3]
				const [elementFour] = elements.splice(3, 1);

				const element = findClosestElement(elementFour, elements, Direction.SOUTH, Strategy.STRICT)
				expect(element.id).toEqual('three')

			})
		})

		describe('above', () => {

			test('returns element seven for element eight', () => {

				const elements = [...unevenGrid3by3]
				const [elementEight] = elements.splice(7, 1);

				const element = findClosestElement(elementEight, elements, Direction.NORTH, Strategy.STRICT)
				expect(element.id).toEqual('seven')

			})
		})

	})

})
