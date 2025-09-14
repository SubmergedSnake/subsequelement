/**
 * @jest-environment jsdom
 */

import { getTargetElements } from "../../src/utilities";

describe('getTargetElements', () => {

	const querySelectorSpy = jest.spyOn(document, 'querySelectorAll');

	test('document.querySelector is called 4 times for 4 selectors', () => {
		getTargetElements(['s1', 's2', 's3', 's4'])
		expect(querySelectorSpy).toHaveBeenCalledTimes(4);
	});

})
