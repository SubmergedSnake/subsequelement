/**
 * @jest-environment jsdom
 */

import { closest, subsequelement } from '../../src/subsequelement'
import { Options, Predicate } from '../../src/types'
import { simplegrid } from '../resources/elements/simplegrid'

describe('find', () => {

	test('throws error on missing input parameters', () => {
		// @ts-ignore
		const faultyArgs: Options = {
			cssSelectorForTargetElements: '.class',
			// bearing: 'n',
			startingElement: document.createElement('div'),
		}
		expect(() => closest(faultyArgs)).toThrow()
	})


	test('throws error on erroneous input parameters', () => {
		const faultyArgs: Options = {
			cssSelectorForTargetElements: '.class',
			bearing: 'n',
			startingElement: document.createElement('div'),
			// @ts-ignore
			predicate: "foo"
		}
		expect(() => closest(faultyArgs)).toThrow()
	})

	test('does not throw error with valid inputs', () => {
		const validArgs: Options = {
			cssSelectorForTargetElements: '.class',
			bearing: 'n',
			startingElement: document.createElement('div'),
			predicate: Predicate.ALIGN
		}

		expect(() => closest(validArgs)).not.toThrow()
	})
})


test.only('n(orth) of K is H', () => {
	let elements = [...simplegrid]
	const K = elements.find(e => e.id === 'K')
	let element
	if (K) {
		element = subsequelement.closest({ startingElement: K, cssSelectorForTargetElements: '.article', bearing: 'n', predicate: Predicate.ALIGN })
	}
	expect(element?.id).toEqual('H')
})
