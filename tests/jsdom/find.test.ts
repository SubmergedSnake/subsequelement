/**
 * @jest-environment jsdom
 */

import { closest } from '../../src/main'
import { Options, Predicate } from '../../src/types'

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
