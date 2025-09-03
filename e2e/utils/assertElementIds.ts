import { subsequelement } from "../../src/subsequelement"
import { test, expect } from '@playwright/test';
import { Bearing, Options } from "../../src/types"

type ElementIdTest = {
  desc: string,
  startingElementId: string,
  bearing: keyof typeof Bearing,
  emphasizeAlign?: boolean,
  expectedId: string
}

export const assertElementIds = (tests: ElementIdTest[], layout: string) => {
  tests.forEach(({ desc, startingElementId, bearing, emphasizeAlign, expectedId }) => test(`${desc}`, async ({ page }) => {
    await page.goto(`/${layout}`)

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
}
