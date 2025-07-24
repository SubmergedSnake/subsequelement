/**
 * @jest-environment jsdom
 */

import { find } from '../src/main'
import { FindArguments, Strategy } from '../src/types'
import { Direction } from '../src/types'

describe('find', () => {

	test('throws error on erroneous input parameters', () => {
		const faultyArgs: FindArguments = {
			cssSelectorForTargetElements: '.class',
			direction: Direction.UP,
			startingElement: document.createElement('div'),
			// @ts-ignore
			strategy: "foo"
		}

		// @ts-ignore
		expect(() => find(faultyArgs)).toThrow()
	})

	test('does not throw error with valid inputs', () => {
		const validArgs: FindArguments = {
			cssSelectorForTargetElements: '.class',
			direction: Direction.UP,
			startingElement: document.createElement('div'),
			strategy: Strategy.FLOW
		}

		expect(() => find(validArgs)).not.toThrow()
	})
})
