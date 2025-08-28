import { getAlignmentIndexForElements } from "../../src/alignmentIndex"
import { closestElement2 } from "../../src/closestElement2"
import { Bearing, SupportedAngle } from "../../src/types"
import { simplegrid } from "../resources/elements/simplegrid"

describe('closestElement2', () => {

	describe('simplegrid', () => {

		test('n(orth) of K is H', () => {
			let elements = [...simplegrid]
			const [K] = elements.splice(10, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(K, elements, Bearing['n'] as SupportedAngle)
			const element = closestElement2(K, elementsWithAlignmentIndex, 'n', 'align')
			expect(element.id).toEqual('H')
		})

		test('n(orth)e(ast) of G is E', () => {
			let elements = [...simplegrid]
			const [G] = elements.splice(6, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(G, elements, Bearing['sw'] as SupportedAngle)
			const element = closestElement2(G, elementsWithAlignmentIndex, 'ne', 'align')
			expect(element.id).toEqual('E')
		})

		test('e(ast) of E is F', () => {
			let elements = [...simplegrid]
			const [E] = elements.splice(4, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(E, elements, Bearing['e'] as SupportedAngle)
			const element = closestElement2(E, elementsWithAlignmentIndex, 'e', 'align')
			expect(element.id).toEqual('F')
		})

		test('s(outh)e(ast) of E is I', () => {
			let elements = [...simplegrid]
			const [E] = elements.splice(4, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(E, elements, Bearing['se'] as SupportedAngle)
			const element = closestElement2(E, elementsWithAlignmentIndex, 'se', 'align')
			expect(element.id).toEqual('I')
		})

		test('s(outh) of B is E', () => {
			let elements = [...simplegrid]
			const [B] = elements.splice(1, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(B, elements, Bearing['s'] as SupportedAngle)
			const element = closestElement2(B, elementsWithAlignmentIndex, 's', 'align')
			expect(element.id).toEqual('E')
		})

		test('s(outh)w(est) of B is D', () => {
			let elements = [...simplegrid]
			const [B] = elements.splice(1, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(B, elements, Bearing['sw'] as SupportedAngle)
			const element = closestElement2(B, elementsWithAlignmentIndex, 'sw', 'align')
			expect(element.id).toEqual('D')
		})

		test('w(est) of I is H', () => {
			let elements = [...simplegrid]
			const [I] = elements.splice(8, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(I, elements, Bearing['w'] as SupportedAngle)
			const element = closestElement2(I, elementsWithAlignmentIndex, 'w', 'align')
			expect(element.id).toEqual('H')
		})

		test('n(orth)w(est) of I is E', () => {
			let elements = [...simplegrid]
			const [I] = elements.splice(8, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(I, elements, Bearing['nw'] as SupportedAngle)
			const element = closestElement2(I, elementsWithAlignmentIndex, 'nw', 'align')
			expect(element.id).toEqual('E')
		})

	})
})

