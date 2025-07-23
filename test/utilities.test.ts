/**
 * @jest-environment jsdom
 */

import { findElements, omitStartingElement } from '../src/utilities'
import { simpleGrid } from '../test/htmlfragments/simplegrid'

const ITEM_CLASS = '.item'

describe('utilities', () => {

	let viableElements: HTMLElement[]

	beforeAll(() => {
		document.body.innerHTML = simpleGrid
	})

	test(`findElements returns 11 elements for simplegrid with css selector ${ITEM_CLASS}`, () => {
		viableElements = findElements(ITEM_CLASS)
		expect(viableElements.length).toBe(11)
	})

	test(`omitStartingElement filters out startingElement from found elements`, () => {
		const startingElement = viableElements[0]
		const otherElements = omitStartingElement(startingElement, viableElements)
		expect(otherElements.includes(startingElement)).toBeFalsy()
	})
})
