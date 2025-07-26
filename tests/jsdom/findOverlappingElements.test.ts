/**
 * @jest-environment jsdom
 */

import { findOverlappingElements } from "../../src/findOverlappingElements"

describe.only('findOverlappingElements', () => {

	test('findRight', () => {
		const el = document.createElement('div')
		const el2 = document.createElement('div')
		const overlapping = findOverlappingElements<HTMLElement>(el, [el2])
		console.log(overlapping)
	})

})
