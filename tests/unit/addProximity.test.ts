/**
 * @jest-environment jsdom
 */

import { addProximity } from "../../src/factors/proximity"


describe('addProximity', () => {

	const startingElementMock = document.createElement('div')
	startingElementMock.getBoundingClientRect = () => {
		return {
			width: 100,
			height: 100,
			top: 100,
			left: 0,
			bottom: 200,
			right: 0,
			x: 0,
			y: 0,
			toJSON: () => ({})
		}
	}


	const topElementMock = document.createElement('div')
	topElementMock.getBoundingClientRect = () => {
		return {
			width: 100,
			height: 100,
			top: -1100,
			left: 0,
			bottom: -1000,
			right: 0,
			x: 0,
			y: 0,
			toJSON: () => ({})
		}
	}



	it('ElementMock1 is 1100px removed vertically from ElementMock2', async () => {
		const verticalDistance = addProximity(startingElementMock, topElementMock, 'n')
		expect(verticalDistance.proximity).toEqual(1100)
	})
})
