/**
 * @jest-environment jsdom
 */

import { near } from '../../src/main'

describe('validateOptions', () => {

	test('throws error on missing input parameters', () => {
		// @ts-ignore
		expect(() => near('n', ['arst'], true)).toThrow('Missing or invalid args: startingElement')
	})


	test('throws error on erroneous input parameters', () => {
		// @ts-ignore
		expect(() => near(document.createElement('div'), 'n', 'selectorAsStringInsteadOfAnArray', 'notaboolean')).toThrow('Missing or invalid args: selectors')
	})

	test('does not throw error with valid inputs', () => {
		expect(() => near(document.createElement('div'), 'n', ['.class'], true)).not.toThrow()
	})
})
