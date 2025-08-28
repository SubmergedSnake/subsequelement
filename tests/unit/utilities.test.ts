import { degreesToRadians } from "../../src/utilities"

describe('degreesToRadians', () => {

	test('returns correct radians for 45 degrees', () => {
		const expectedRadians = 0.7853981633974483
		const radians = degreesToRadians(45)
		expect(radians).toEqual(expectedRadians)
	})

	test('returns correct radians for 90 degrees', () => {
		const expectedRadians = 1.5707963267948966
		const radians = degreesToRadians(90)
		expect(radians).toEqual(expectedRadians)
	})

})
