import { getAlignmentIndexForElements as getElementsAndAlignment } from "../../src/alignmentIndex";
import { furthestElement } from "../../src/furthestElement";
import { Bearing } from "../../src/types";
import { simplegrid } from "../resources/elements/simplegrid";

describe('furthestElement', () => {
	describe('simplegrid', () => {

		it('furthest element s(outh)e(ast) of A is I', async () => {
			let elements = [...simplegrid]
			const [A] = elements.splice(0, 1);
			const elementsWithAlignment = getElementsAndAlignment(A, elements, Bearing['se'])
			const element = furthestElement(A, elementsWithAlignment, 'se', { strict: true })
			expect(element.id).toEqual('I')
		})

		it('furthest element n(orth)w(est) of R is A', async () => {
			let elements = [...simplegrid]
			const R = elements.find(e => e.id === 'R')
			let element
			if (R) {
				const elementsWithAlignment = getElementsAndAlignment(R, elements, Bearing['nw'])
				element = furthestElement(R, elementsWithAlignment, 'nw')
			}
			expect(element?.id).toEqual('A')
		})

		// TODO - should return undefined, no elements sw of S
		it('furthest element s(outh)w(est) of O is S', async () => {
			let elements = [...simplegrid]
			const S = elements.find(e => e.id === 'O')
			let element
			if (S) {
				const elementsWithAlignment = getElementsAndAlignment(S, elements.filter(e => e.id !== 'S'), Bearing['sw'])
				element = furthestElement(S, elementsWithAlignment, 'sw')
			}
			expect(element?.id).toEqual('O')
		})

		it.only('furthest element s(outh)w(est) of C is S', async () => {
			let elements = [...simplegrid]
			const C = elements.find(e => e.id === 'C')
			let element
			if (C) {
				const elementsWithAlignment = getElementsAndAlignment(C, elements, Bearing['sw'])
				elementsWithAlignment.forEach(e => console.log(`${e.e.id}, ${e.alignment}`))
				element = furthestElement(C, elementsWithAlignment, 'sw', { strict: true })
			}
			expect(element?.id).toEqual('S')
		})
	})
})
