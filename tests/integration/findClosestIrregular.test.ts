import { findAlignedElements } from "../../src/finding/alignment"
import { closestElement } from "../../src/finding/closestElement"
import { irregulargrid } from "../resources/elements/irregulargrid"
import { Bearing, SupportedAngle } from "../../src/types"

describe('closestElement', () => {
	describe('irregulargrid', () => {
		test('e(ast) of B is C', () => {
			let elements = [...irregulargrid]
			const [B] = elements.splice(1, 1);
			const element = closestElement(B, elements, 'e')
			expect(element.id).toEqual('C')
		})
		test('n(orth) of D is C', () => {
			let elements = [...irregulargrid]
			const [D] = elements.splice(3, 1);
			const element = closestElement(D, elements, 'n')
			expect(element.id).toEqual('C')
		})
		test('w(est) of B is A', () => {
			let elements = [...irregulargrid]
			const [B] = elements.splice(1, 1);
			const element = closestElement(B, elements, 'w')
			expect(element.id).toEqual('A')
		})
		test.only('n(orth)w(est) of C is B (strict)', () => {
			let elements = [...irregulargrid]
			const [C] = elements.splice(2, 1);
			elements = findAlignedElements(C, [elements[1]], Bearing['nw'] as SupportedAngle)
			const element = closestElement(C, elements, 'nw')
			expect(element.id).toEqual('B')
		})
		test.skip('n(orth)w(est) of C is B (strict)', () => {
			let elements = [...irregulargrid]
			const [C] = elements.splice(2, 1);
			elements = findAlignedElements(C, elements, Bearing['nw'] as SupportedAngle)
			console.log(`aligned elements: ${elements}`);

			const element = closestElement(C, elements, 'nw')
			expect(element.id).toEqual('B')
		})
	})
})

