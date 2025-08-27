import { getAlignmentIndexForElements as getElementsAndAlignment } from "../../../src/alignmentIndex";
import { furthestElement } from "../../../src/furthestElement";
import { Bearing } from "../../../src/types";
import { simplegrid } from "../../resources/elements/simplegrid";

describe('furthestElement', () => {
	it('furthest element n(orth)w(est) of A is I with alignment = true', async () => {
		let elements = [...simplegrid]
		const [A] = elements.splice(0, 1);
		const elementsWithAlignment = getElementsAndAlignment(A, elements, Bearing['nw'])
		const element = furthestElement('nw', A, elementsWithAlignment, true)
		expect(element.id).toEqual('I')
	})

	it('furthest element n(orth)w(est) of A is R with alignment = undefined', async () => {
		let elements = [...simplegrid]
		const [A] = elements.splice(0, 1);
		const elementsWithAlignment = getElementsAndAlignment(A, elements, Bearing['nw'])
		const element = furthestElement('nw', A, elementsWithAlignment)
		expect(element.id).toEqual('R')
	})

	it.only('furthest element s(outh)w(est) of S is O with alignment = true', async () => {
		let elements = [...simplegrid]
		const S = elements.find(e => e.id === 'S')
		let element
		if (S) {
			const elementsWithAlignment = getElementsAndAlignment(S, elements.filter(e => e.id !== 'S'), Bearing['sw'])
			element = furthestElement('sw', S, elementsWithAlignment, true)
		}
		expect(element?.id).toEqual('O')
	})

	it('furthest element s(outh)w(est) of S is C with alignment = undefined', async () => {
		let elements = [...simplegrid]
		const S = elements.find(e => e.id === 'S')
		let element
		if (S) {
			const elementsWithAlignment = getElementsAndAlignment(S, elements, Bearing['nw'])
			console.log(elementsWithAlignment.map(e => `Element ${e.e.id}, ${e.e.getBoundingClientRect().x + e.e.getBoundingClientRect().y + e.alignment} `))
			element = furthestElement('nw', S, elementsWithAlignment)
		}
		expect(element?.id).toEqual('C')
	})
})
