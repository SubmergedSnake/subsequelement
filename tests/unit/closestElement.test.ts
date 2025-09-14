import { closestElement } from "../../src/reducers/closestElement"

describe('closestElement', () => {

	it('returns undefined if otherElements length is 0', async () => {
		const closest = closestElement([])
		expect(closest).toBeUndefined()
	})

})
