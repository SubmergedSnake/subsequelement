import { getElementsWithAlignment } from "../../src/finding/alignmentIndex"
import { closestElement2 } from "../../src/finding/closestElement2"
import { findInDirection } from "../../src/finding/direction"
import { Bearing } from "../../src/types"
import { varyingsizes } from "../resources/elements/varyingsizes"

describe('closestElement', () => {
	describe('varyingsizes', () => {
		test('e(ast) of A is B', () => {
			let elements = [...varyingsizes]
			const [A] = elements.splice(0, 1);
			const elementsInDirection = findInDirection(A, elements.filter(e => e.id !== 'A'), 'e')
			const elementsWithAlignment = getElementsWithAlignment(A, elementsInDirection, Bearing['e'])
			const element = closestElement2(A, elementsWithAlignment, 'e')
			expect(element.id).toEqual('B')
		})

		test('w(est) of C is B', () => {
			let elements = [...varyingsizes]
			const [C] = elements.splice(2, 1);
			const elementsInDirection = findInDirection(C, elements.filter(e => e.id !== 'C'), 'w')
			const elementsWithAlignment = getElementsWithAlignment(C, elementsInDirection, Bearing['w'])
			console.log(`elements that align with C: ${elementsWithAlignment.map(e => `${e.e.id}, ${e.alignment}`)}`);

			const element = closestElement2(C, elementsWithAlignment, 'w')
			expect(element.id).toEqual('B')
		})

		test('n(orth) of G is F', () => {
			let elements = [...varyingsizes]
			const G = elements.find(e => e.id === 'G')
			let element
			if (G) {
				const elementsInDirection = findInDirection(G, elements.filter(e => e.id !== 'G'), 'n')
				const elementsWithAlignment = getElementsWithAlignment(G, elementsInDirection, Bearing['n'])
				element = closestElement2(G, elementsWithAlignment, 'n')
				console.log(`elements that align with G: ${elementsWithAlignment.map(e => `${e.e.id}, ${e.alignment}`)}`);
			}

			expect(element?.id).toEqual('F')
		})

		test('s(outh) of E is F', () => {
			let elements = [...varyingsizes]
			const E = elements.find(e => e.id === 'E')
			let element
			if (E) {
				const elementsInDirection = findInDirection(E, elements.filter(e => e.id !== 'E'), 's')
				const elementsWithAlignment = getElementsWithAlignment(E, elementsInDirection, Bearing['s'])
				element = closestElement2(E, elementsWithAlignment, 's')
				console.log(`elements that align with E: ${elementsWithAlignment.map(e => `${e.e.id}, ${e.alignment}`)}`);
			}
			expect(element?.id).toEqual('F')
		})
	})
})

