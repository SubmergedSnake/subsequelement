import { addProximity } from "../../src/helpers/getProximity"
import { simplegrid } from "../resources/elements/simplegrid"
import { overlappinggrid } from "../resources/elements/overlappinggrid"

describe('getProximity', () => {
	describe('works for non-overlapping elements', () => {
		it.only('returns correct proximity between A and C', async () => {
			const [elementA, , elementC] = simplegrid
			const cWithProximity = addProximity(elementA, elementC)
			expect(cWithProximity.proximity).toEqual(204)
		})

		it('returns correct proximity between A and I', async () => {
			const A = simplegrid.find(e => e.id === 'A')
			const I = simplegrid.find(e => e.id === 'I')
			let eWithProximity
			if (A && I) {
				eWithProximity = addProximity(A, I)
			}
			expect(eWithProximity?.proximity).toEqual(408)
		})

		it('returns correct proximity between A and F', async () => {
			const A = simplegrid.find(e => e.id === 'A')
			const R = simplegrid.find(e => e.id === 'R')
			let eWithProximity
			if (A && R) {
				eWithProximity = addProximity(A, R)
			}
			expect(eWithProximity?.proximity).toEqual(1020)
		})
	})

	describe('works for overlapping elements', () => {
		it('returns correct proximity between A and C', async () => {
			const A = overlappinggrid.find(e => e.id === 'A')
			const C = overlappinggrid.find(e => e.id === 'C')
			let eWithProximity
			if (A && C) {
				eWithProximity = addProximity(A, C)
			}
			expect(eWithProximity?.proximity).toEqual(21)
		})

		it('returns correct proximity between B and C', async () => {
			const B = overlappinggrid.find(e => e.id === 'B')
			const C = overlappinggrid.find(e => e.id === 'C')
			let eWithProximity
			if (B && C) {
				eWithProximity = addProximity(B, C)
			}
			expect(eWithProximity?.proximity).toEqual(35)
		})

		it('returns correct proximity between B and D', async () => {
			const B = overlappinggrid.find(e => e.id === 'B')
			const D = overlappinggrid.find(e => e.id === 'D')
			let eWithProximity
			if (B && D) {
				eWithProximity = addProximity(B, D)
			}
			expect(eWithProximity?.proximity).toEqual(39)
		})
	})
})

