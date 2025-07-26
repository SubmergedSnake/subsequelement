import { test, expect } from '@playwright/test';
import { Strategy, AdjaycentArgs, Direction } from '../src/types';


test('adjaycent works', {
  tag: '@adjaycent',
}, async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Item One')).toBeVisible()

  const elementId = await page.evaluate(() => {

    const args: AdjaycentArgs = {
      startingElement: document.querySelector('#one') as HTMLElement,
      strategy: "STRICT",
      cssSelectorForTargetElements: 'article',
      direction: "RIGHT"

    }
    // @ts-ignore, adjaycent is set on the window object in index.html
    const element = adjaycent(args)
    return element
  })
  console.log("Returned element id: ", elementId)
});

