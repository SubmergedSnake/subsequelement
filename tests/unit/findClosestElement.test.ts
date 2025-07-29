import { findClosestElement } from "../../src/findClosestElement";
import { Direction, Strategy } from "../../src/types";
import { simplegrid3by3 } from "./mockLayouts/simpleGrid3by3"

describe('findClosestElement', () => {

	describe('to the right', () => {

		test('returns element six for element nine', () => {

			const elementNine = simplegrid3by3[8];
			const firstEightElements = simplegrid3by3.slice(0, 8);

			const element = findClosestElement(elementNine, firstEightElements, Direction.LEFT, Strategy.STRICT)
			expect(element.id).toEqual('six')

		})
	})

})
