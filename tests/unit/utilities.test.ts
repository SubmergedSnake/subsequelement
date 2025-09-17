import { calculateAlignment } from "../../src/utilities"
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

describe('calculateAlignment', () => {
	it('returns 0.5 for ranges [5,15] and [10, 20]', async () => {
		const range1: number[] = [5, 15]
		const range2: number[] = [10, 20]
		const result = calculateAlignment(range1, range2)
		expect(result).toEqual(0.5)
	})


	it('returns 1 for ranges [60, 139] and [10, 314] (because range1 is completely within range2', async () => {
		const range1: number[] = [60, 139]
		const range2: number[] = [10, 314]
		const result = calculateAlignment(range1, range2)
		expect(result).toEqual(1)
	})

})
