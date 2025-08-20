import { findAlignedElements } from "../../src/finding/alignment"
import { closestElement } from "../../src/finding/closestElement"
import { Bearing, SupportedAngle } from "../../src/types"
import { simplegrid } from "../pages/elements/simplegrid"

describe('closestElement', () => {

	describe('simplegrid (strict, findAlignedElements)', () => {

		test('n(orth) of K is H', () => {
			let elements = [...simplegrid]
			const [K] = elements.splice(10, 1);
			elements = findAlignedElements(K, elements, Bearing['n'] as SupportedAngle)
			const element = closestElement(K, elements, 'n')
			expect(element.id).toEqual('H')
		})

		test('n(orth) of A is S', () => {
			let elements = [...simplegrid]
			const [A] = elements.splice(0, 1);
			elements = findAlignedElements(A, elements, Bearing['n'] as SupportedAngle)
			const element = closestElement(A, elements, 'n')
			expect(element.id).toEqual('S')
		})

		test('n(orth)e(ast) of G is E', () => {
			let elements = [...simplegrid]
			const [G] = elements.splice(6, 1);

			elements = findAlignedElements(G, elements, Bearing['ne'] as SupportedAngle)
			const element = closestElement(G, elements, 'ne')
			expect(element.id).toEqual('E')
		})

		test('n(orth)e(ast) of L is P', () => {
			let elements = [...simplegrid]
			const [L] = elements.splice(11, 1);

			elements = findAlignedElements(L, elements, Bearing['ne'] as SupportedAngle)
			const element = closestElement(L, elements, 'ne')
			expect(element.id).toEqual('P')
		})

		test('e(ast) of E is F', () => {
			let elements = [...simplegrid]
			const [E] = elements.splice(4, 1);
			elements = findAlignedElements(E, elements, Bearing['e'] as SupportedAngle)
			const element = closestElement(E, elements, 'e')
			expect(element.id).toEqual('F')
		})

		test('e(ast) of F is D', () => {
			let elements = [...simplegrid]
			const [F] = elements.splice(5, 1);
			elements = findAlignedElements(F, elements, Bearing['e'] as SupportedAngle)
			const element = closestElement(F, elements, 'e')
			expect(element.id).toEqual('D')
		})

		test('s(outh) of B is E', () => {
			let elements = [...simplegrid]
			const [B] = elements.splice(1, 1);
			elements = findAlignedElements(B, elements, Bearing['s'] as SupportedAngle)
			const element = closestElement(B, elements, 's')
			expect(element.id).toEqual('E')
		})

		test('s(outh)e(ast) of I is A', () => {
			let elements = [...simplegrid]
			const [I] = elements.splice(8, 1);
			elements = findAlignedElements(I, elements, Bearing['se'] as SupportedAngle)
			const element = closestElement(I, elements, 'se')
			expect(element.id).toEqual('A')
		})
		test('s(outh)w(est) of G is C', () => {
			let elements = [...simplegrid]
			const [G] = elements.splice(6, 1);
			elements = findAlignedElements(G, elements, Bearing['sw'] as SupportedAngle)
			const element = closestElement(G, elements, 'sw')
			expect(element.id).toEqual('C')
		})

		test('w(est) of I is H', () => {
			let elements = [...simplegrid]
			const [I] = elements.splice(8, 1);

			elements = findAlignedElements(I, elements, Bearing['w'] as SupportedAngle)
			const element = closestElement(I, elements, 'w')
			expect(element.id).toEqual('H')
		})

	})
})

