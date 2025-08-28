import { getAlignmentIndexForElements as getElementsAndAlignment } from "../../src/helpers/alignmentIndex";
import { findInDirection } from "../../src/direction";
import { furthestElement } from "../../src/proximity/furthestElement";
import { Bearing, Predicate } from "../../src/types";
import { simplegrid } from "../resources/elements/simplegrid";

describe('furthestElement', () => {
	describe('simplegrid', () => {

		it('furthest element s(outh)e(ast) of A is I', async () => {
			let elements = [...simplegrid]
			const A = elements.find(e => e.id === 'A')
			let element
			if (A) {
				const elementsInDirection = findInDirection(A, elements, 'se')
				const elementsWithAlignment = getElementsAndAlignment(A, elementsInDirection, Bearing['se'])
				element = furthestElement(A, elementsWithAlignment, 'se', Predicate.ALIGN)
			}
			expect(element?.id).toEqual('I')
		})

		it('furthest element n(orth)e(ast) of G is C', async () => {
			let elements = [...simplegrid]
			const G = elements.find(e => e.id === 'G')
			let element
			if (G) {
				const elementsInDirection = findInDirection(G, elements, 'ne')
				const elementsWithAlignment = getElementsAndAlignment(G, elementsInDirection, Bearing['ne'])
				element = furthestElement(G, elementsWithAlignment, 'ne', Predicate.ALIGN)
			}
			expect(element?.id).toEqual('C')
		})

		it('furthest element n(orth)w(est) of R is A', async () => {
			let elements = [...simplegrid]
			const R = elements.find(e => e.id === 'R')
			let element
			if (R) {
				const elementsInDirection = findInDirection(R, elements, 'nw')
				const elementsWithAlignment = getElementsAndAlignment(R, elementsInDirection, Bearing['nw'])
				element = furthestElement(R, elementsWithAlignment, 'nw')
			}
			expect(element?.id).toEqual('A')
		})

		it('furthest element s(outh)w(est) of O is S', async () => {
			let elements = [...simplegrid]
			const O = elements.find(e => e.id === 'O')
			let element
			if (O) {
				const elementsInDirection = findInDirection(O, elements, 'sw')
				const elementsWithAlignment = getElementsAndAlignment(O, elementsInDirection, Bearing['sw'])
				element = furthestElement(O, elementsWithAlignment, 'sw', Predicate.ALIGN)
			}
			expect(element?.id).toEqual('S')
		})

		it('furthest element s(outh)w(est) of C is S (strict)', async () => {
			let elements = [...simplegrid]
			const C = elements.find(e => e.id === 'C')
			let element
			if (C) {
				const elementsInDirection = findInDirection(C, elements, 'sw')
				const elementsWithAlignment = getElementsAndAlignment(C, elementsInDirection, Bearing['sw'])
				element = furthestElement(C, elementsWithAlignment, 'sw', Predicate.ALIGN)
			}
			expect(element?.id).toEqual('G')
		})

		it('furthest element s(outh)w(est) of C is S', async () => {
			let elements = [...simplegrid]
			const C = elements.find(e => e.id === 'C')
			let element
			if (C) {
				const elementsInDirection = findInDirection(C, elements, 'sw')
				const elementsWithAlignment = getElementsAndAlignment(C, elementsInDirection, Bearing['sw'])
				element = furthestElement(C, elementsWithAlignment, 'sw')
			}
			expect(element?.id).toEqual('S')
		})
	})
})
