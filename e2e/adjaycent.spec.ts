import { test, expect } from '@playwright/test';
import { Options } from '../src/types';


test('adjaycent works', {
  tag: '@adjaycent',
}, async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Item One')).toBeVisible()

  const elementId = await page.evaluate(() => {

    const args: Options = {
      startingElement: document.querySelector('#one') as HTMLElement,
      predicate: "STRICT",
      cssSelectorForTargetElements: 'article',
      bearing: "e"
    }
    // @ts-ignore, adjaycent is set on the window object in index.html
    const element = adjaycent(args)
    return element
  })
});

