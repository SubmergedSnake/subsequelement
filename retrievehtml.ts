import playwright from 'playwright';
import * as fs from 'fs'


(async () => {

  const layouts: string[] = ['simplegrid', 'funnygrid']

  for (const layout of layouts) {
    const browser = await playwright['firefox'].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(`http://localhost:1234/${layout}.html`)

    const pageElements = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('article')).map(e => {
        const rect = e.getBoundingClientRect()
        return {
          id: e.id,
          top: rect.top,
          left: rect.left,
          right: rect.right,
          bottom: rect.bottom,
          width: rect.width,
          height: rect.height,
          x: rect.x,
          y: rect.y,
        }
      }).sort()
    })

    fs.writeFileSync(`./tests/pages/elements/${layout}.ts`, `import { HasIdAndElementCoords } from "../../../src/types";
export const ${layout}: HasIdAndElementCoords[] = ${JSON.stringify(pageElements, null, 2)}`)


    await page.waitForTimeout(1000);
    await browser.close();
  }
})();
