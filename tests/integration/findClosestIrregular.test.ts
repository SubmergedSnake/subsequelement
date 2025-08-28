import { closestElement2 } from "../../src/closestElement2"
import { irregulargrid } from "../resources/elements/irregulargrid"
import { Bearing } from "../../src/types"
import { getAlignmentIndexForElements } from "../../src/alignmentIndex"

describe('closestElement', () => {
	describe('irregulargrid', () => {
		test('e(ast) of B is C', () => {
			let elements = [...irregulargrid]
			const [B] = elements.splice(1, 1);
			const elementsWithAlignment = getAlignmentIndexForElements(B, elements.filter(e => e.id !== 'B'), Bearing['e'])
			const element = closestElement2(B, elementsWithAlignment, 'e', 'align')
			expect(element.id).toEqual('C')
		})
		test('n(orth) of D is C', () => {
			let elements = [...irregulargrid]
			const D = elements.find(e => e.id === 'D')
			let element
			if (D) {
				const elementsWithAlignment = getAlignmentIndexForElements(D, elements, Bearing['n'])
				element = closestElement2(D, elementsWithAlignment, 'n', 'align')
			}
			expect(element?.id).toEqual('C')
		})
		test('w(est) of B is A', () => {
			let elements = [...irregulargrid]
			const [B] = elements.splice(1, 1);
			const elementsWithAlignment = getAlignmentIndexForElements(B, elements.filter(e => e.id !== 'B'), Bearing['w'])
			const element = closestElement2(B, elementsWithAlignment, 'w', 'align')
			expect(element.id).toEqual('A')
		})


		test('w(est) of E is D', () => {
			let elements = [...irregulargrid]
			const [E] = elements.splice(4, 1);
			const elementsWithAlignment = getAlignmentIndexForElements(E, elements, Bearing['w'])
			const element = closestElement2(E, elementsWithAlignment, 'w')
			expect(element.id).toEqual('D')
		})

		test('s(outh)w(est) of E is C', () => {
			let elements = [...irregulargrid]
			const E = elements.find(e => e.id === 'E')
			let element
			if (E) {
				const elementsWithAlignment = getAlignmentIndexForElements(E, elements, Bearing['sw'])
				element = closestElement2(E, elementsWithAlignment, 'sw', 'align')
			}
			expect(element?.id).toEqual('C')
		})

		test('n(orth)e(ast) of C is E', () => {
			let elements = [...irregulargrid]
			const [C] = elements.splice(2, 1);
			const elementsWithAlignment = getAlignmentIndexForElements(C, elements.filter(e => e.id !== 'C'), Bearing['ne'])
			const element = closestElement2(C, elementsWithAlignment, 'ne', 'align')
			expect(element.id).toEqual('E')
		})

		test('n(orth)e(ast) of E is C', () => {
			let elements = [...irregulargrid]
			const [E] = elements.splice(4, 1);
			const elementsWithAlignment = getAlignmentIndexForElements(E, elements.filter(e => e.id !== 'E'), Bearing['ne'])
			const element = closestElement2(E, elementsWithAlignment, 'ne', 'align')
			expect(element.id).toEqual('C')
		})

		test('n(orth)w(est) of B is A', () => {
			let elements = [...irregulargrid]
			const [B] = elements.splice(1, 1);
			const elementsWithAlignment = getAlignmentIndexForElements(B, elements.filter(e => e.id !== 'B'), Bearing['nw'])

			const element = closestElement2(B, elementsWithAlignment, 'nw', 'align')
			expect(element.id).toEqual('A')
		})

		test('n(orth)w(est) of C is B', () => {
			let elements = [...irregulargrid]
			const [C] = elements.splice(2, 1);
			const elementsWithAlignment = getAlignmentIndexForElements(C, elements.filter(e => e.id !== 'C'), Bearing['nw'])
			const element = closestElement2(C, elementsWithAlignment, 'nw', 'align')
			expect(element.id).toEqual('B')
		})

		test('s(outh) of B is C', () => {
			let elements = [...irregulargrid]
			const B = elements.find(e => e.id === 'B')
			let element
			if (B) {
				const elementsWithAlignment = getAlignmentIndexForElements(B, elements.filter(e => e.id !== 'D'), Bearing['s'])
				element = closestElement2(B, elementsWithAlignment, 's', 'align')
			}
			expect(element?.id).toEqual('C')
		})
		test('s(outh)e(ast) of B is C', () => {
			let elements = [...irregulargrid]
			const [B] = elements.splice(1, 1);
			const elementsWithAlignment = getAlignmentIndexForElements(B, elements.filter(e => e.id !== 'B'), Bearing['se'])
			const element = closestElement2(B, elementsWithAlignment, 'se', 'align')
			expect(element.id).toEqual('C')
		})
		test('s(outh)w(est) of E is C', () => {
			let elements = [...irregulargrid]
			const [E] = elements.splice(4, 1);
			const elementsWithAlignment = getAlignmentIndexForElements(E, elements.filter(e => e.id !== 'E'), Bearing['sw'])
			const element = closestElement2(E, elementsWithAlignment, 'sw', 'align')
			expect(element.id).toEqual('C')
		})
	})
})

