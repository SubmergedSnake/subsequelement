import { test, expect } from '@playwright/test';
import { HasToAlign, Bearing } from "../../../src/types"

type ElementIdTest = {
  desc: string,
  startingElementId: string,
  bearing: keyof typeof Bearing,
  hasToAlign?: HasToAlign,
  expectedId: string
}

export const assertNearestElementIds = (tests: ElementIdTest[], layout: string) => {
  tests.forEach(({ desc, startingElementId, bearing, hasToAlign, expectedId }) => test(`${desc}`, async ({ page }) => {
    await page.goto(`/${layout}`)

    const elementId = await page.evaluate((args) => {

      const startingElement = document.getElementById(args.startingElementId)

      let element

      if (startingElement) {
        // @ts-ignore
        element = window.near(startingElement, args.bearing, ['article'], args.hasToAlign)
      }

      return element?.id

    }, { startingElementId, bearing, hasToAlign })
    expect(elementId).toEqual(expectedId)
  })
  )
}
