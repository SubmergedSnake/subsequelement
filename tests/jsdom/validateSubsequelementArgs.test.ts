/**
 * @jest-environment jsdom
 */

import { closest } from '../../src/main'
import { Options } from '../../src/types'

describe('validateOptions', () => {

	test('throws error on missing input parameters', () => {
		const options: Options = {
			selectors: ['arst'],
			preferAlignment: true
		}
		// @ts-ignore
		expect(() => closest('n', options)).toThrow('Missing or invalid args: startingElement')
	})


	test('throws error on erroneous input parameters', () => {
		const options: Options = {
			// @ts-ignore
			selectors: '.class',
			bearing: 'invalid',
		}
		expect(() => closest(document.createElement('div'), 'n', options)).toThrow('Missing or invalid args: selectors')
	})

	test('does not throw error with valid inputs', () => {
		const options: Options = {
			selectors: ['.class'],
			preferAlignment: true
		}

		expect(() => closest(document.createElement('div'), 'n', options)).not.toThrow()
	})
})
