import { calculateAlignment } from "../../src/helpers/alignmentIndex"

describe('calculateAlignment', () => {

	it('returns correct range overlap', async () => {
		const number = calculateAlignment([5, 10], [7, 13])
		expect(number).toEqual(3)
	})

	it('returns distance between range end and range start, if no overlap', async () => {
		const number = calculateAlignment([5, 10], [18, 20])
		expect(number).toEqual(-8)
	})

	it('returns distance between range end and range start, if no overlap', async () => {
		const number = calculateAlignment([18, 20], [5, 10])
		expect(number).toEqual(-8)
	})

})
