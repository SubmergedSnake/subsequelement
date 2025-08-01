/**
 * @jest-environment jsdom
 */

import { adjaycent } from '../src/main'
import { AdjaycentArgs, Strategy } from '../src/types'
import { Direction } from '../src/types'

describe('find', () => {

	test('throws error on erroneous input parameters', () => {
		const faultyArgs: AdjaycentArgs = {
			cssSelectorForTargetElements: '.class',
			direction: Direction.NORTH,
			startingElement: document.createElement('div'),
			// @ts-ignore
			strategy: "foo"
		}

		// @ts-ignore
		expect(() => adjaycent(faultyArgs)).toThrow()
	})

	test('does not throw error with valid inputs', () => {
		const validArgs: AdjaycentArgs = {
			cssSelectorForTargetElements: '.class',
			direction: Direction.NORTH,
			startingElement: document.createElement('div'),
			strategy: Strategy.FLOW
		}

		expect(() => adjaycent(validArgs)).not.toThrow()
	})
})
