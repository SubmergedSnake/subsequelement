import { test, expect } from '@playwright/test';
import { ElementIdTest } from '../specs/testtypes';


export const assertFarthestElementIds = (tests: ElementIdTest[], layout: string) => {
  tests.forEach(({ desc, startingElementId, bearing, hasToAlign, expectedId, scroll }) => test(`${desc}`, async ({ page }) => {
    await page.goto(`/${layout}`)

    const elementId = await page.evaluate((args) => {
      const startingElement = document.getElementById(args.startingElementId)
      const A = document.getElementById('A')
      console.log('A y:', A?.getBoundingClientRect().y)

      if (startingElement) {
        // Scroll the page to the startingElement before running window.far
        if (scroll) {
          console.log('scrolling')
          startingElement.scrollIntoView({ behavior: 'auto', block: 'center' })
        }
        console.log('A y (after scroll):', A?.getBoundingClientRect().y)
        // @ts-ignore
        const element = window.far(startingElement, args.bearing, ['article'], args.hasToAlign)
        return element?.id
      }

      return null
    }, { startingElementId, bearing, hasToAlign, scroll })

    await page.screenshot({ path: 'scrolled.png' });

    expect(elementId).toEqual(expectedId)
  })
  )
}
