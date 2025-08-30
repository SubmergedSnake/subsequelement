/**
 * @jest-environment jsdom
 */

import { closest } from '../../src/subsequelement'
import { Options, Predicate } from '../../src/types'

describe('validateOptions', () => {

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
			// @ts-ignore
			bearing: 'invalid',
			startingElement: document.createElement('div'),
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
