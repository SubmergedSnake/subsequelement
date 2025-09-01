import { test, expect } from '@playwright/test';
import { Bearing, Options } from '../src/types';
import { subsequelement } from '../src/subsequelement';

const simpleGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, emphasizeAlign: boolean, expectedId: string }[] = [
  { desc: 'n(orth) of K is H', startingElementId: 'K', bearing: 'n', emphasizeAlign: true, expectedId: 'H' },
  { desc: 'n(orth)e(ast) of G is E', startingElementId: 'G', bearing: 'ne', emphasizeAlign: true, expectedId: 'E' },
  { desc: 'e(ast) of E is F', startingElementId: 'E', bearing: 'e', emphasizeAlign: true, expectedId: 'F' }
]


simpleGridTests.forEach(({ desc, startingElementId, bearing, emphasizeAlign, expectedId }) => test(`${desc}`, async ({ page }) => {
  await page.goto('/simplegrid')

  const elementId = await page.evaluate((args) => {

    const startingElement = document.getElementById(args.startingElementId)

    const options: Options = {
      selectors: ['article'],
      emphasizeAlign: args.emphasizeAlign
    }

    let element

    if (startingElement) {
      element = subsequelement.closest(startingElement, args.bearing, options)
    }

    return element?.id

  }, { startingElementId, bearing, emphasizeAlign })
  expect(elementId).toEqual(expectedId)
})
)

