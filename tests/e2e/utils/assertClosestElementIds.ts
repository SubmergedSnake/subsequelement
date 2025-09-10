import { test, expect } from '@playwright/test';
import { Bearing, Options } from "../../../src/types"
import { closest } from '../../../src/main';

type ElementIdTest = {
  desc: string,
  startingElementId: string,
  bearing: keyof typeof Bearing,
  preferAlignment?: boolean,
  expectedId: string
}

export const assertClosestElementIds = (tests: ElementIdTest[], layout: string) => {
  tests.forEach(({ desc, startingElementId, bearing, preferAlignment, expectedId }) => test(`${desc}`, async ({ page }) => {
    await page.goto(`/${layout}`)

    const elementId = await page.evaluate((args) => {

      const startingElement = document.getElementById(args.startingElementId)

      const options: Options = {
        selectors: ['article'],
        preferAlignment: args.preferAlignment
      }

      let element

      if (startingElement) {
        element = closest(startingElement, args.bearing, options)
      }

      return element?.id

    }, { startingElementId, bearing, preferAlignment })
    expect(elementId).toEqual(expectedId)
  })
  )
}
