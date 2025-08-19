import { findAlignedElements } from "../../src/finding/alignment"
import { closestElement } from "../../src/finding/closestElement"
import { Bearing, SupportedAngle } from "../../src/types"
import { simplegrid } from "../pages/elements/simplegrid"

describe('closestElement', () => {

	describe('simplegrid (strict)', () => {

		describe('north', () => {
			test('returns element H for element K', () => {
				let elements = [...simplegrid]
				const [K] = elements.splice(10, 1);
				elements = findAlignedElements(K, elements, Bearing['n'] as SupportedAngle)
				const element = closestElement(K, elements, 'n')
				expect(element.id).toEqual('H')
			})
		})


		describe('northeast', () => {
			test('returns element E for element G', () => {
				let elements = [...simplegrid]
				const [G] = elements.splice(6, 1);

				elements = findAlignedElements(G, elements, Bearing['ne'] as SupportedAngle)
				const element = closestElement(G, elements, 'ne')
				expect(element.id).toEqual('E')
			})
		})

		describe('east', () => {
			test('returns element F for element E', () => {
				let elements = [...simplegrid]
				const [E] = elements.splice(4, 1);
				elements = findAlignedElements(E, elements, Bearing['e'] as SupportedAngle)
				const element = closestElement(E, elements, 'e')
				expect(element.id).toEqual('F')
			})
		})

		describe('south', () => {
			test('returns element E for element B', () => {
				let elements = [...simplegrid]
				const [B] = elements.splice(1, 1);
				elements = findAlignedElements(B, elements, Bearing['s'] as SupportedAngle)
				const element = closestElement(B, elements, 's')
				expect(element.id).toEqual('E')
			})
		})

		describe('west', () => {
			test('returns element H for element I', () => {
				let elements = [...simplegrid]
				const [I] = elements.splice(8, 1);

				elements = findAlignedElements(I, elements, Bearing['w'] as SupportedAngle)
				const element = closestElement(I, elements, 'w')
				expect(element.id).toEqual('H')
			})
		})

	})
})

