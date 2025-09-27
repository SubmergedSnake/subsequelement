import { test, expect } from '@playwright/test';
import { ElementIdTest } from '../specs/testtypes';


export const assertFarthestElementIds = (tests: ElementIdTest[], layout: string) => {
  tests.forEach(({ desc, startingElementId, bearing, hasToAlign, expectedId, scroll }) => test(`${desc}`, async ({ page }) => {
    await page.goto(`/${layout}`)

    const elementId = await page.evaluate((args) => {
      const startingElement = document.getElementById(args.startingElementId)

      if (startingElement) {
        if (scroll) {
          startingElement.scrollIntoView({ behavior: 'auto', block: 'center' })
        }
        // @ts-ignore
        const element = window.far(startingElement, args.bearing, ['article'], args.hasToAlign)
        return element?.id
      }

      return null
    }, { startingElementId, bearing, hasToAlign, scroll })

    expect(elementId).toEqual(expectedId)
  })
  )
}
