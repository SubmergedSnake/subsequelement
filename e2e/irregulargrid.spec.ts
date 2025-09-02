
import { test, expect } from '@playwright/test';
import { Bearing, Options } from '../src/types';
import { subsequelement } from '../src/subsequelement';

const simpleGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, emphasizeAlign?: boolean, expectedId: string }[] = [
  { desc: 'e(ast) of B is C', startingElementId: 'B', bearing: 'e', emphasizeAlign: true, expectedId: 'C' },
  { desc: 'n(orth) of D is C', startingElementId: 'D', bearing: 'n', emphasizeAlign: true, expectedId: 'C' },
  { desc: 'w(est) of B is A', startingElementId: 'B', bearing: 'w', emphasizeAlign: true, expectedId: 'A' },
  { desc: 'w(est) of E is D', startingElementId: 'E', bearing: 'w', expectedId: 'D' },
  { desc: 's(outh)w(est) of E is C', startingElementId: 'E', bearing: 'sw', emphasizeAlign: true, expectedId: 'C' },
  { desc: 'n(orth)e(ast) of C is E', startingElementId: 'C', bearing: 'ne', emphasizeAlign: true, expectedId: 'E' },
  { desc: 'n(orth)w(est) of B is A', startingElementId: 'B', bearing: 'nw', emphasizeAlign: true, expectedId: 'A' },
  { desc: 'n(orth)w(est) of C is B', startingElementId: 'C', bearing: 'nw', emphasizeAlign: true, expectedId: 'B' },
  { desc: 's(outh) of B is C', startingElementId: 'B', bearing: 's', emphasizeAlign: true, expectedId: 'C' },
  { desc: 's(outh)e(ast) of B is C', startingElementId: 'B', bearing: 'se', emphasizeAlign: true, expectedId: 'C' },
]


simpleGridTests.forEach(({ desc, startingElementId, bearing, emphasizeAlign, expectedId }) => test(`${desc}`, async ({ page }) => {
  await page.goto('/irregulargrid')

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

