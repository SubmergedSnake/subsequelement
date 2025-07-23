import { JSDOM } from 'jsdom'
describe('Find', () => {
	test('finds element below selected element', async () => {
		const dom = await JSDOM.fromFile("test/index.html");
		console.log(dom.window.document.querySelector("#one")?.textContent);
	})
})
