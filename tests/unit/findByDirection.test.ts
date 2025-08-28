import { findInDirection } from "../../src/direction"
import { simplegrid } from "../resources/elements/simplegrid"


const getIndexPageElements = () => [...simplegrid]



describe('direction', () => {

	describe('simplegrid', () => {

		test('returns only elements north of element E', () => {
			const [E] = getIndexPageElements().splice(4, 1);
			const elements = findInDirection(E, simplegrid, 'n')
			expect(elements.map(e => e.id).sort()).toEqual(['A', 'B', 'C'].sort())
		})

		test('returns only elements northeast of element E', () => {
			const [E] = getIndexPageElements().splice(4, 1);
			const elements = findInDirection(E, simplegrid, 'ne')
			expect(elements.map(e => e.id).sort()).toEqual(['C'].sort())
		})

		test('returns only elements east of element A', () => {
			const [A] = getIndexPageElements().splice(0, 1);
			const elements = findInDirection(A, simplegrid, 'e')
			expect(elements.map(e => e.id).sort()).toEqual(
				['B', 'C', 'E', 'F', 'H', 'I', 'K', 'L', 'M', 'O', 'Q', 'R', 'T']
					.sort())
		})

		test('returns only elements southeast of element N', () => {
			const [N] = getIndexPageElements().splice(12, 1);
			const elements = findInDirection(N, simplegrid, 'se')
			expect(elements.map(e => e.id).sort()).toEqual(['Q', 'R', 'T'].sort())
		})

		test('returns only elements south of element M', () => {
			const [M] = getIndexPageElements().splice(13, 1);
			const elements = findInDirection(M, simplegrid, 's')
			expect(elements.map(e => e.id).sort()).toEqual(['P', 'Q', 'R', 'S', 'T'].sort())
		})

		test('returns only elements southwest of element M', () => {
			const [M] = getIndexPageElements().splice(13, 1);
			const elements = findInDirection(M, simplegrid, 'sw')
			expect(elements.map(e => e.id).sort()).toEqual(['P', 'S'].sort())
		})

		test('returns only elements to the west of element B', () => {
			const [B] = getIndexPageElements().splice(1, 1);
			const elements = findInDirection(B, simplegrid, 'w')
			expect(elements.map(e => e.id).sort()).toEqual(['A', 'D', 'G', 'J', 'N', 'P', 'S'].sort())
		})

		test('returns only elements northwest of element H', () => {
			const [H] = getIndexPageElements().splice(7, 1);

			const elements = findInDirection(H, simplegrid, 'nw')
			expect(elements.map(e => e.id).sort()).toEqual(['D', 'A'].sort())
		})

	})
})
