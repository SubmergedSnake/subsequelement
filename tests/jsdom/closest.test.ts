/**
 * @jest-environment jsdom
 */

import { subsequelement } from "../../src/subsequelement"
import { simplegrid } from "../resources/elements/simplegrid"

const INVALID_SELECTOR = 'invalid'
const SIMPLE_SELECTOR = 'simplegrid'
const IRREGULAR_SELECTOR = 'irregulargrid'
const VARYING_SIZES_SELECTOR = 'varyingsizes'


describe('closest', () => {

	let querySelectorSpy

	beforeAll(() => {
		querySelectorSpy = jest.spyOn(document, 'querySelectorAll').mockImplementation((selectors: string) => {
			let elements
			switch (selectors) {
				case INVALID_SELECTOR:
					elements = []
					break;
				case SIMPLE_SELECTOR:
					elements = simplegrid
					break;
			}
			return elements as any as NodeListOf<Element>
		}
		)
	})

	test('returns undefined if selectors returns nothing', () => {
		let elements = [...simplegrid]
		const K = elements.find(e => e.id === 'K')
		let element
		if (K) {
			element = subsequelement.closest(K, 'n', { selectors: ['foobar'] })
		}
		expect(element).toBe(undefined)
	})
	test('returns B north of E', () => {

		let elements = [...simplegrid]
		const E = elements.find(e => e.id === 'E')
		let element
		if (E) {
			element = subsequelement.closest(E, 'n', { selectors: [SIMPLE_SELECTOR], emphasizeAlign: true })
		}
		expect(element?.id).toEqual('B')
	})
})
