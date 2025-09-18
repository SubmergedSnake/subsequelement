import { test, expect } from '@playwright/test';
import { Bearing } from "../../../src/types"

export type PerformanceTest = {
  startingHTMLElementId: string,
  bearing: keyof typeof Bearing,
  preferAlignment?: boolean,
  steps: number,
  desc: string,
  maxDuration: number
}

export const assertPerformance = (performanceTest: PerformanceTest, layout: string) => {

  test(`${performanceTest.desc}`, async ({ page }) => {
    await page.goto(`/${layout}`)

    const duration = await page.evaluate((args): number => {

      const steps = args.steps
      let currentStep = 0
      const startingHTMLElement = document.getElementById(args.startingHTMLElementId)
      const start = performance.now()
      let currentElement
      do {
        if (currentElement) {
          // @ts-ignore
          currentElement = window.near(currentElement as HTMLElement, args.bearing, ['article'], args.preferAlignment) as HTMLElement
        } else {
          // @ts-ignore
          currentElement = window.near(startingHTMLElement as HTMLElement, args.bearing, ['article'], args.preferAlignment) as HTMLElement
        }
        currentStep++
      } while (currentElement || currentStep < steps)
      const stop = performance.now()
      return steps / (stop - start)

    }, performanceTest)
    expect(duration).toBeLessThan(performanceTest.maxDuration)
  })
}
