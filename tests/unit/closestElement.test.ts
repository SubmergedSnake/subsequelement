import { nearestElement } from "../../src/reducers/nearestElement"

describe('nearestElement', () => {

	it('returns undefined if otherElements length is 0', async () => {
		const closest = nearestElement([])
		expect(closest).toBeUndefined()
	})

})
