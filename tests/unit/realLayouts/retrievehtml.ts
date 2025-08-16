import playwright from 'playwright';
import * as fs from 'fs'

(async () => {
  const browser = await playwright['firefox'].launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:1234')
  // await page.screenshot({ path: `adjaycent.png`, fullPage: true });

  const indexPageElements = await page.evaluate(() => {
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

  fs.writeFileSync('./tests/unit/realLayouts/indexPageLayout.ts', `import { HasIdAndElementCoords } from "../../../src/types";
export const indexPageLayout: HasIdAndElementCoords[] = ${JSON.stringify(indexPageElements, null, 2)}`)


  await page.waitForTimeout(1000);
  await browser.close();
})();
