import { test, expect } from '@playwright/test';
import { AlignmentOption, Bearing } from "../../../src/types"

type ElementIdTest = {
  desc: string,
  startingElementId: string,
  bearing: keyof typeof Bearing,
  alignmentOption?: AlignmentOption,
  expectedId: string
}

export const assertNearestElementIds = (tests: ElementIdTest[], layout: string) => {
  tests.forEach(({ desc, startingElementId, bearing, alignmentOption, expectedId }) => test(`${desc}`, async ({ page }) => {
    await page.goto(`/${layout}`)

    const elementId = await page.evaluate((args) => {

      const startingElement = document.getElementById(args.startingElementId)

      let element

      if (startingElement) {
        // @ts-ignore
        element = window.near(startingElement, args.bearing, ['article'], args.alignmentOption)
      }

      return element?.id

    }, { startingElementId, bearing, alignmentOption })
    expect(elementId).toEqual(expectedId)
  })
  )
}
