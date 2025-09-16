import { test, expect } from '@playwright/test';
import { Bearing } from "../../../src/types"

type ElementIdTest = {
  desc: string,
  startingElementId: string,
  bearing: keyof typeof Bearing,
  preferAlignment?: boolean,
  expectedId: string
}

export const assertFurthestElementIds = (tests: ElementIdTest[], layout: string) => {
  tests.forEach(({ desc, startingElementId, bearing, preferAlignment, expectedId }) => test(`${desc}`, async ({ page }) => {
    await page.goto(`/${layout}`)

    const elementId = await page.evaluate((args) => {

      const startingElement = document.getElementById(args.startingElementId)

      let element

      if (startingElement) {
        // @ts-ignore
        element = window.furthest(startingElement, args.bearing, ['article'], args.preferAlignment)
      }

      return element?.id

    }, { startingElementId, bearing, preferAlignment })
    expect(elementId).toEqual(expectedId)
  })
  )
}
