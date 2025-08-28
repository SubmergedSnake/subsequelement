/**
 * @jest-environment jsdom
 */

import { adjaycent } from '../../src/main'
import { Options, Predicate } from '../../src/types'

describe('find', () => {

	test('throws error on missing input parameters', () => {
		// @ts-ignore
		const faultyArgs: Options = {
			cssSelectorForTargetElements: '.class',
			bearing: 'n',
			startingElement: document.createElement('div'),
		}
		expect(() => adjaycent(faultyArgs)).toThrow()
	})


	test('throws error on erroneous input parameters', () => {
		const faultyArgs: Options = {
			cssSelectorForTargetElements: '.class',
			bearing: 'n',
			startingElement: document.createElement('div'),
			// @ts-ignore
			predicate: "foo"
		}
		expect(() => adjaycent(faultyArgs)).toThrow()
	})

	test('does not throw error with valid inputs', () => {
		const validArgs: Options = {
			cssSelectorForTargetElements: '.class',
			bearing: 'n',
			startingElement: document.createElement('div'),
			predicate: Predicate.ALIGN
		}

		expect(() => adjaycent(validArgs)).not.toThrow()
	})
})
