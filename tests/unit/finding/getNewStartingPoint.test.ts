import { findClosestElement } from "../../../src/finding/findClosestElement"
import { getNewStartingPoint } from "../../../src/finding/getNewStartingPoint"
import { Direction, Strategy } from "../../../src/types"
import { simplegrid3by3 } from "../mockLayouts/simpleGrid3by3"

describe('getNewStartingPoint', () => {

	test('findClosestElement returns item one for item seven when going right', () => {

		const elements = [...simplegrid3by3]
		const [elementSeven] = elements.splice(6, 1);

		const phantomElement = getNewStartingPoint(elementSeven, elements, Direction.RIGHT)
		const nextElementToTheRightOfSeven = findClosestElement(phantomElement, elements, Direction.RIGHT, Strategy.STRICT)
		expect(nextElementToTheRightOfSeven.id).toEqual('one')
	})

	test('findClosestElement returns item one for item three when going down', () => {

		const elements = [...simplegrid3by3]
		const [elementThree] = elements.splice(2, 1);

		const phantomElement = getNewStartingPoint(elementThree, elements, Direction.DOWN)
		const nextElementBelowThree = findClosestElement(phantomElement, elements, Direction.DOWN, Strategy.STRICT)
		expect(nextElementBelowThree.id).toEqual('one')
	})

	test('findClosestElement returns item eight for item two when going left', () => {

		const elements = [...simplegrid3by3]
		const [elementTwo] = elements.splice(1, 1);

		const phantomElement = getNewStartingPoint(elementTwo, elements, Direction.LEFT)
		const nextElementLeftOfTWo = findClosestElement(phantomElement, elements, Direction.LEFT, Strategy.STRICT)
		expect(nextElementLeftOfTWo.id).toEqual('eight')
	})

	test('findClosestElement returns item nine for item seven when going up', () => {

		const elements = [...simplegrid3by3]
		const [elementSeven] = elements.splice(6, 1);

		const phantomElement = getNewStartingPoint(elementSeven, elements, Direction.UP)
		const nextElementUpFromSeven = findClosestElement(phantomElement, elements, Direction.UP, Strategy.STRICT)
		expect(nextElementUpFromSeven.id).toEqual('nine')
	})

})
