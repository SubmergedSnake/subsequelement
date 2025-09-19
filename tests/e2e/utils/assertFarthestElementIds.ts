import { test, expect } from '@playwright/test';
import { ElementIdTest } from '../specs/testtypes';


export const assertFarthestElementIds = (tests: ElementIdTest[], layout: string) => {
  tests.forEach(({ desc, startingElementId, bearing, hasToAlign, expectedId }) => test(`${desc}`, async ({ page }) => {
    await page.goto(`/${layout}`)

    const elementId = await page.evaluate((args) => {

      const startingElement = document.getElementById(args.startingElementId)

      let element

      if (startingElement) {
        // @ts-ignore
        element = window.far(startingElement, args.bearing, ['article'], args.hasToAlign)
      }

      return element?.id

    }, { startingElementId, bearing, hasToAlign })
    expect(elementId).toEqual(expectedId)
  })
  )
}
