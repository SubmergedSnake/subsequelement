/**
 * @jest-environment jsdom
 */

import { closest } from '../../src/main'
import { Options } from '../../src/types'

describe('validateOptions', () => {

	test('throws error on missing input parameters', () => {
		// @ts-ignore
		expect(() => closest('n', ['arst'], true)).toThrow('Missing or invalid args: startingElement')
	})


	test('throws error on erroneous input parameters', () => {
		// @ts-ignore
		expect(() => closest(document.createElement('div'), 'n', 'selectorAsStringInsteadOfAnArray', 'notaboolean')).toThrow('Missing or invalid args: selectors')
	})

	test('does not throw error with valid inputs', () => {
		expect(() => closest(document.createElement('div'), 'n', ['.class'], true)).not.toThrow()
	})
})
