import { beforeEach } from "node:test"
import { indexPageLayout } from "../../../indexPageLayout"
import { findInDirection } from "../../../src/finding/findByDirection"
import { Direction, HasIdAndElementCoords } from "../../../src/types"
import { unevenGrid3by3 } from "../mockLayouts/unevenGrid3by3"


const getIndexPageElements = () => [...indexPageLayout]



describe('findByDirection', () => {

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

		test('returns only elements east of element one', () => {
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

		test('returns only elements south of element four', () => {
			const [twelve] = getIndexPageElements().splice(11, 1);
			const elements = findInDirection(twelve, indexPageLayout, Direction.SOUTH)
			expect(elements.map(e => e.id).sort()).toEqual(['fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twentyone'].sort())
		})

		test('returns only elements southwest of element fifteen', () => {
			const [fifteen] = getIndexPageElements().splice(14, 1);
			const elements = findInDirection(fifteen, indexPageLayout, Direction.SOUTHWEST)
			expect(elements.map(e => e.id).sort()).toEqual(['seventeen', 'twenty'].sort())
		})

		test('returns only elements to the left of element four', () => {
			const [one, two, three, four, ...rest] = indexPageLayout
			const elements = findInDirection(four, [one, two, three, ...rest], Direction.WEST)
			expect(elements.map(e => e.id).sort()).toEqual(['one', 'two', 'three'].sort())
		})

		test('returns only elements northwest of element five', () => {
			const [one, two, three, four, five, ...rest] = indexPageLayout
			const elements = findInDirection(five, [one, two, three, four, ...rest], Direction.NORTHWEST)
			expect(elements.map(e => e.id).sort()).toEqual(['one'].sort())
		})

	})


	// 	describe('unevengrid3by3', () => {
	// 		describe('East', () => {
	// 			test('returns only elements to the right of element four', () => {
	// 				const [one, two, three, four, ...rest] = unevenGrid3by3
	// 				const elements = findInDirection(four, [one, two, three, ...rest], Direction.EAST)
	// 				expect(elements.map(e => e.id).sort()).toEqual(['five', 'six', 'seven', 'eight', 'nine'].sort())
	// 			})
	// 		})
	//
	// 		describe('West', () => {
	// 			test('returns only elements to the left of element four', () => {
	// 				const [one, two, three, four, ...rest] = unevenGrid3by3
	// 				const elements = findInDirection(four, [one, two, three, ...rest], Direction.WEST)
	// 				expect(elements.map(e => e.id).sort()).toEqual(['one', 'two'].sort())
	// 			})
	// 		})
	//
	// 		describe('South', () => {
	// 			test('returns only elements below element four', () => {
	// 				const [one, two, three, four, ...rest] = unevenGrid3by3
	// 				const elements = findInDirection(four, [one, two, three, ...rest], Direction.SOUTH)
	// 				expect(elements.map(e => e.id).sort()).toEqual(['two', 'three', 'five', 'six', 'eight', 'nine'].sort())
	// 			})
	// 		})
	//
	// 		describe('North', () => {
	// 			test('returns only elements above element five', () => {
	// 				const [one, two, three, four, five, ...rest] = unevenGrid3by3
	// 				const elements = findInDirection(five, [one, two, three, four, ...rest], Direction.NORTH)
	// 				expect(elements.map(e => e.id).sort()).toEqual(['one', 'four', 'seven'].sort())
	// 			})
	// 		})
	// 	})
})
