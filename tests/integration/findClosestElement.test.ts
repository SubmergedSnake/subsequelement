import { closestElement } from "../../src/finding/closestElement"
import { Strategy } from "../../src/types"
import { simplegrid } from "../pages/elements/simplegrid"

describe('closestElement', () => {

	describe('simplegrid', () => {

		describe('north', () => {
			test('returns element H for element K', () => {
				const elements = [...simplegrid]
				const [K] = elements.splice(10, 1);
				const element = closestElement(K, elements, 'n', Strategy.STRICT)
				expect(element.id).toEqual('H')
			})
		})


		describe('northeast', () => {
			test('returns element E for element G', () => {
				const elements = [...simplegrid]
				const [G] = elements.splice(6, 1);

				const element = closestElement(G, elements, 'ne', Strategy.STRICT)
				expect(element.id).toEqual('E')
			})
		})

		describe('east', () => {
			test('returns element F for element E', () => {
				const elements = [...simplegrid]
				const [E] = elements.splice(4, 1);
				const element = closestElement(E, elements, 'e', Strategy.STRICT)
				expect(element.id).toEqual('F')
			})
		})

		describe('south', () => {
			test('returns element E for element B', () => {
				const elements = [...simplegrid]
				const [B] = elements.splice(1, 1);
				const element = closestElement(B, elements, 's', Strategy.STRICT)
				expect(element.id).toEqual('E')
			})
		})

		describe('west', () => {
			test('returns element H for element I', () => {
				const elements = [...simplegrid]
				const [I] = elements.splice(8, 1);

				const element = closestElement(I, elements, 'w', Strategy.STRICT)
				expect(element.id).toEqual('H')
			})
		})

	})
})

