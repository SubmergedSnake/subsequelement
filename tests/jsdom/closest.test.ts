/**
 * @jest-environment jsdom
 */

import { subsequelement } from "../../src/subsequelement"
import { Predicate } from "../../src/types"
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

	test('returns undefined if cssSelectorForTargetElements returns nothing', () => {
		let elements = [...simplegrid]
		const K = elements.find(e => e.id === 'K')
		let element
		if (K) {
			element = subsequelement.closest({ startingElement: K, cssSelectorForTargetElements: INVALID_SELECTOR, bearing: 'n', predicate: Predicate.ALIGN })
		}
		expect(element).toBe(undefined)
	})
	test('returns B north of E', () => {

		let elements = [...simplegrid]
		const E = elements.find(e => e.id === 'E')
		let element
		if (E) {
			element = subsequelement.closest({ startingElement: E, cssSelectorForTargetElements: SIMPLE_SELECTOR, bearing: 'n', predicate: Predicate.ALIGN })
		}
		expect(element?.id).toEqual('B')
	})
})
