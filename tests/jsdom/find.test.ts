/**
 * @jest-environment jsdom
 */

import { adjaycent } from '../../src/main'
import { AdjaycentArgs, Direction, Strategy } from '../../src/types'

describe('find', () => {

	test('throws error on missing input parameters', () => {
		// @ts-ignore
		const faultyArgs: FindArguments = {
			cssSelectorForTargetElements: '.class',
			direction: Direction.NORTH,
			startingElement: document.createElement('div'),
		}
		expect(() => adjaycent(faultyArgs)).toThrow()
	})


	test('throws error on erroneous input parameters', () => {
		const faultyArgs: AdjaycentArgs = {
			cssSelectorForTargetElements: '.class',
			direction: Direction.NORTH,
			startingElement: document.createElement('div'),
			// @ts-ignore
			strategy: "foo"
		}
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
