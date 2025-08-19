import { findInDirection } from "../../../src/finding/direction"
import { Direction, HasIdAndElementCoords } from "../../../src/types"
import { indexPageLayout } from "../realLayouts/indexPageLayout"


const getIndexPageElements = () => [...indexPageLayout]



describe('direction', () => {

	describe('indexPageLayout', () => {

		test('returns only elements north of element E', () => {
			const [E] = getIndexPageElements().splice(4, 1);
			const elements = findInDirection(E, indexPageLayout, Direction.NORTH)
			expect(elements.map(e => e.id).sort()).toEqual(['A', 'B', 'C'].sort())
		})

		test('returns only elements northeast of element E', () => {
			const [E] = getIndexPageElements().splice(4, 1);
			const elements = findInDirection(E, indexPageLayout, Direction.NORTHEAST)
			expect(elements.map(e => e.id).sort()).toEqual(['C'].sort())
		})

		test('returns only elements east of element A', () => {
			const [A] = getIndexPageElements().splice(0, 1);
			const elements = findInDirection(A, indexPageLayout, Direction.EAST)
			expect(elements.map(e => e.id).sort()).toEqual(
				['B', 'C', 'E', 'F', 'H', 'I', 'K', 'L', 'M', 'O', 'Q', 'R', 'T']
					.sort())
		})

		test('returns only elements southeast of element N', () => {
			const [N] = getIndexPageElements().splice(12, 1);
			const elements = findInDirection(N, indexPageLayout, Direction.SOUTHEAST)
			expect(elements.map(e => e.id).sort()).toEqual(['Q', 'R', 'T'].sort())
		})

		test('returns only elements south of element M', () => {
			const [M] = getIndexPageElements().splice(13, 1);
			console.log(M)
			const elements = findInDirection(M, indexPageLayout, Direction.SOUTH)
			expect(elements.map(e => e.id).sort()).toEqual(['P', 'Q', 'R', 'S', 'T'].sort())
		})

		test('returns only elements southwest of element M', () => {
			const [M] = getIndexPageElements().splice(13, 1);
			const elements = findInDirection(M, indexPageLayout, Direction.SOUTHWEST)
			expect(elements.map(e => e.id).sort()).toEqual(['P', 'S'].sort())
		})

		test('returns only elements to the west of element B', () => {
			const [B] = getIndexPageElements().splice(1, 1);
			const elements = findInDirection(B, indexPageLayout, Direction.WEST)
			expect(elements.map(e => e.id).sort()).toEqual(['A', 'D', 'G', 'J', 'N', 'P', 'S'].sort())
		})

		test('returns only elements northwest of element five', () => {
			const [H] = getIndexPageElements().splice(7, 1);
			const elements = findInDirection(H, indexPageLayout, Direction.NORTHWEST)
			expect(elements.map(e => e.id).sort()).toEqual(['D', 'A'].sort())
		})

	})
})
