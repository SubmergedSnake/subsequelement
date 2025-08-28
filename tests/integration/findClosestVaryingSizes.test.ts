import { getAlignmentIndexForElements } from "../../src/helpers/alignmentIndex"
import { closestElement2 } from "../../src/proximity/closestElement2"
import { getElementsInDirection } from "../../src/direction"
import { Bearing } from "../../src/types"
import { varyingsizes } from "../resources/elements/varyingsizes"

describe('closestElement', () => {
	describe('varyingsizes', () => {
		test('e(ast) of A is B', () => {
			let elements = [...varyingsizes]
			const [A] = elements.splice(0, 1);
			const elementsInDirection = getElementsInDirection(A, elements.filter(e => e.id !== 'A'), 'e')
			const elementsWithAlignment = getAlignmentIndexForElements(A, elementsInDirection, Bearing['e'])
			const element = closestElement2(A, elementsWithAlignment, 'e')
			expect(element.id).toEqual('B')
		})

		test('w(est) of C is B', () => {
			let elements = [...varyingsizes]
			const [C] = elements.splice(2, 1);
			const elementsInDirection = getElementsInDirection(C, elements.filter(e => e.id !== 'C'), 'w')
			const elementsWithAlignment = getAlignmentIndexForElements(C, elementsInDirection, Bearing['w'])

			const element = closestElement2(C, elementsWithAlignment, 'w')
			expect(element.id).toEqual('B')
		})

		test('n(orth) of G is F', () => {
			let elements = [...varyingsizes]
			const G = elements.find(e => e.id === 'G')
			let element
			if (G) {
				const elementsInDirection = getElementsInDirection(G, elements.filter(e => e.id !== 'G'), 'n')
				const elementsWithAlignment = getAlignmentIndexForElements(G, elementsInDirection, Bearing['n'])
				element = closestElement2(G, elementsWithAlignment, 'n')
			}

			expect(element?.id).toEqual('F')
		})

		test('s(outh) of E is F', () => {
			let elements = [...varyingsizes]
			const E = elements.find(e => e.id === 'E')
			let element
			if (E) {
				const elementsInDirection = getElementsInDirection(E, elements.filter(e => e.id !== 'E'), 's')
				const elementsWithAlignment = getAlignmentIndexForElements(E, elementsInDirection, Bearing['s'])
				element = closestElement2(E, elementsWithAlignment, 's')
			}
			expect(element?.id).toEqual('F')
		})
	})
})

