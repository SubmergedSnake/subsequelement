
import { test, expect } from '@playwright/test';
import { NearestElementToPointTest } from '../specs/testtypes';


export const assertNearestElementToPoint = (tests: NearestElementToPointTest[], layout: string) => {
  tests.forEach(({ desc, point, selectors, expectedId }) => test(`${desc}`, async ({ page }) => {
    await page.goto(`/${layout}`)
    console.log('evaluating point:', point)

    const elementId = await page.evaluate((args) => {
      // @ts-ignore
      const nearestElement = window.nearestElementToPoint(args.point, args.selectors)

      return nearestElement?.id

    }, { point, selectors })
    expect(elementId).toEqual(expectedId)
  })
  )
}
