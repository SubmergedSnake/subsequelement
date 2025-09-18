import { test, expect } from '@playwright/test';
import { Bearing } from "../../../src/types"

type ElementIdTest = {
  desc: string,
  startingHTMLElementId: string,
  bearing: keyof typeof Bearing,
  preferAlignment?: boolean,
  expectedId: string
}

export const assertFarthestElementIds = (tests: ElementIdTest[], layout: string) => {
  tests.forEach(({ desc, startingHTMLElementId, bearing, preferAlignment, expectedId }) => test(`${desc}`, async ({ page }) => {
    await page.goto(`/${layout}`)

    const elementId = await page.evaluate((args) => {

      const startingHTMLElement = document.getElementById(args.startingHTMLElementId)

      let element

      if (startingHTMLElement) {
        // @ts-ignore
        element = window.far(startingHTMLElement, args.bearing, ['article'], args.preferAlignment)
      }

      return element?.id

    }, { startingHTMLElementId, bearing, preferAlignment })
    expect(elementId).toEqual(expectedId)
  })
  )
}
