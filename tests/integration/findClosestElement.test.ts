import { closest } from "../../src/finding/closestElement"
import { Strategy } from "../../src/types"
import { indexPageLayout } from "../unit/realLayouts/indexPageLayout"

describe('findClosestElement', () => {

	describe('indexPageLayout', () => {

		describe('north', () => {
			test('returns element H for element K', () => {
				const elements = [...indexPageLayout]
				const [K] = elements.splice(10, 1);
				const element = closest(K, elements, 'n', Strategy.STRICT)
				expect(element.id).toEqual('H')
			})
		})


		describe('northeast', () => {
			test('returns element E for element G', () => {
				const elements = [...indexPageLayout]
				const [G] = elements.splice(6, 1);

				const element = closest(G, elements, 'ne', Strategy.STRICT)
				expect(element.id).toEqual('E')
			})
		})

		describe('east', () => {
			test('returns element F for element E', () => {
				const elements = [...indexPageLayout]
				const [E] = elements.splice(4, 1);
				const element = closest(E, elements, 'e', Strategy.STRICT)
				expect(element.id).toEqual('F')
			})
		})

		describe('south', () => {
			test('returns element E for element B', () => {
				const elements = [...indexPageLayout]
				const [B] = elements.splice(1, 1);
				const element = closest(B, elements, 's', Strategy.STRICT)
				expect(element.id).toEqual('E')
			})
		})

		describe('west', () => {
			test('returns element H for element I', () => {
				const elements = [...indexPageLayout]
				const [I] = elements.splice(8, 1);

				const element = closest(I, elements, 'w', Strategy.STRICT)
				expect(element.id).toEqual('H')
			})
		})

	})
})

