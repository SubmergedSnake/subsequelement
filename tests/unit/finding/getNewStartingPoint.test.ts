import { findClosestElement } from "../../../src/finding/findClosestElement"
import { getNewStartingPoint } from "../../../src/finding/getNewStartingPoint"
import { Direction, Strategy } from "../../../src/types"
import { simplegrid3by3 } from "../mockLayouts/simpleGrid3by3"

describe('getNewStartingPoint', () => {
	test('findClosestElement returns item one for item seven when going East', () => {
		const elements = [...simplegrid3by3]
		const [elementSeven] = elements.splice(6, 1);

		const phantomElement = getNewStartingPoint(elementSeven, elements, Direction.EAST)
		const nextElementEastOfSeven = findClosestElement(phantomElement, elements, Direction.EAST, Strategy.STRICT)
		expect(nextElementEastOfSeven.id).toEqual('one')
	})

	test('findClosestElement returns item one for item three when going South', () => {

		const elements = [...simplegrid3by3]
		const [elementThree] = elements.splice(2, 1);

		const phantomElement = getNewStartingPoint(elementThree, elements, Direction.SOUTH)
		const nextElementSouthOfThree = findClosestElement(phantomElement, elements, Direction.SOUTH, Strategy.STRICT)
		expect(nextElementSouthOfThree.id).toEqual('one')
	})

	test('findClosestElement returns item eight for item two when going West', () => {

		const elements = [...simplegrid3by3]
		const [elementTwo] = elements.splice(1, 1);

		const phantomElement = getNewStartingPoint(elementTwo, elements, Direction.WEST)
		const nextElementWestOfTWo = findClosestElement(phantomElement, elements, Direction.WEST, Strategy.STRICT)
		expect(nextElementWestOfTWo.id).toEqual('eight')
	})

	test('findClosestElement returns item nine for item seven when going North', () => {

		const elements = [...simplegrid3by3]
		const [elementSeven] = elements.splice(6, 1);

		const phantomElement = getNewStartingPoint(elementSeven, elements, Direction.NORTH)
		const nextElementNorthOfSeven = findClosestElement(phantomElement, elements, Direction.NORTH, Strategy.STRICT)
		expect(nextElementNorthOfSeven.id).toEqual('nine')
	})

})
