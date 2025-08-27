import { getAlignmentIndexForElements } from "../../src/alignmentIndex"
import { closestElement2 } from "../../src/closestElement2"
import { findInDirection } from "../../src/direction"
import { Bearing, SupportedAngle } from "../../src/types"
import { simplegrid } from "../resources/elements/simplegrid"

describe('closestElement2', () => {

	describe('simplegrid', () => {

		test.only('e(ast) of F undefined', () => {
			let elements = [...simplegrid]
			const [F] = elements.splice(5, 1);
			const elementsInDirection = findInDirection(F, elements, 'e')
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(F, elements, Bearing['e'] as SupportedAngle)
			const element = closestElement2(F, elementsWithAlignmentIndex, 'e', { strict: true })
			expect(element.id).toBeUndefined()
		})


		test('s(outh) of S is A', () => {
			let elements = [...simplegrid]
			const [S] = elements.splice(18, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(S, elements, Bearing['s'] as SupportedAngle)
			const element = closestElement2(S, elementsWithAlignmentIndex, 's', { strict: true })
			expect(element.id).toEqual('A')
		})

		test('n(orth) of B is T', () => {
			let elements = [...simplegrid]
			const [B] = elements.splice(1, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(B, elements, Bearing['n'] as SupportedAngle)
			const element = closestElement2(B, elementsWithAlignmentIndex, 'n', { strict: true })
			expect(element.id).toEqual('T')
		})

		test('n(orth) of K is H', () => {
			let elements = [...simplegrid]
			const [K] = elements.splice(10, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(K, elements, Bearing['n'] as SupportedAngle)
			const element = closestElement2(K, elementsWithAlignmentIndex, 'n', { strict: true })
			expect(element.id).toEqual('H')
		})


		test('n(orth) of K is H (strict)', () => {
			let elements = [...simplegrid]
			const [K] = elements.splice(10, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(K, elements, Bearing['n'] as SupportedAngle)
			const element = closestElement2(K, elementsWithAlignmentIndex, 'n', { strict: true })
			expect(element.id).toEqual('H')
		})

		test('n(orth)w(est) of A is I (strict)', () => {
			let elements = [...simplegrid]
			const [A] = elements.splice(0, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(A, elements, Bearing['nw'] as SupportedAngle)
			const element = closestElement2(A, elementsWithAlignmentIndex, 'nw', { strict: true })
			expect(element.id).toEqual('I')
		})

		test('n(orth) of A is S (strict)', () => {
			let elements = [...simplegrid]
			const [A] = elements.splice(0, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(A, elements, Bearing['n'] as SupportedAngle)
			const element = closestElement2(A, elementsWithAlignmentIndex, 'n', { strict: true })
			expect(element.id).toEqual('S')
		})

		test('n(orth)e(ast) of G is E (strict)', () => {
			let elements = [...simplegrid]
			const [G] = elements.splice(6, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(G, elements, Bearing['sw'] as SupportedAngle)
			const element = closestElement2(G, elementsWithAlignmentIndex, 'ne', { strict: true })
			expect(element.id).toEqual('E')
		})

		test('n(orth)e(ast) of L is P (strict)', () => {
			let elements = [...simplegrid]
			const [L] = elements.splice(11, 1);

			const elementsWithAlignmentIndex = getAlignmentIndexForElements(L, elements, Bearing['ne'] as SupportedAngle)
			const element = closestElement2(L, elementsWithAlignmentIndex, 'ne', { strict: true })
			expect(element.id).toEqual('P')
		})

		test('e(ast) of E is F (strict)', () => {
			let elements = [...simplegrid]
			const [E] = elements.splice(4, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(E, elements, Bearing['e'] as SupportedAngle)
			const element = closestElement2(E, elementsWithAlignmentIndex, 'e', { strict: true })
			expect(element.id).toEqual('F')
		})

		test('e(ast) of F is D (strict)', () => {
			let elements = [...simplegrid]
			const [F] = elements.splice(5, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(F, elements, Bearing['e'] as SupportedAngle)
			const element = closestElement2(F, elementsWithAlignmentIndex, 'e', { strict: true })
			expect(element.id).toEqual('D')
		})

		test('s(outh) of B is E (strict)', () => {
			let elements = [...simplegrid]
			const [B] = elements.splice(1, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(B, elements, Bearing['s'] as SupportedAngle)
			const element = closestElement2(B, elementsWithAlignmentIndex, 's', { strict: true })
			expect(element.id).toEqual('E')
		})

		test('s(outh)e(ast) of I is A (strict)', () => {
			let elements = [...simplegrid]
			const [I] = elements.splice(8, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(I, elements, Bearing['se'] as SupportedAngle)
			const element = closestElement2(I, elementsWithAlignmentIndex, 'se', { strict: true })
			expect(element.id).toEqual('A')
		})
		test('s(outh)w(est) of G is C (strict)', () => {
			let elements = [...simplegrid]
			const [G] = elements.splice(6, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(G, elements, Bearing['sw'] as SupportedAngle)
			const element = closestElement2(G, elementsWithAlignmentIndex, 'sw', { strict: true })
			expect(element.id).toEqual('C')
		})

		test('w(est) of I is H (strict)', () => {
			let elements = [...simplegrid]
			const [I] = elements.splice(8, 1);
			const elementsWithAlignmentIndex = getAlignmentIndexForElements(I, elements, Bearing['w'] as SupportedAngle)
			const element = closestElement2(I, elementsWithAlignmentIndex, 'w', { strict: true })
			expect(element.id).toEqual('H')
		})

	})
})

