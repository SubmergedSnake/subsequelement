import { closest } from "../../../src/main"
import { test, expect } from '@playwright/test';
import { Bearing } from "../../../src/types"

export type PerformanceTest = {
  startingElementId: string,
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
      const startingElement = document.getElementById(args.startingElementId)
      const start = performance.now()
      let currentElement
      do {
        if (currentElement) {
          currentElement = closest(currentElement as HTMLElement, args.bearing, ['article'], args.preferAlignment) as HTMLElement
        } else {
          currentElement = closest(startingElement as HTMLElement, args.bearing, ['article'], args.preferAlignment) as HTMLElement
        }
        currentStep++
      } while (currentElement || currentStep < steps)
      const stop = performance.now()
      return steps / (stop - start)

    }, performanceTest)
    expect(duration).toBeLessThan(performanceTest.maxDuration)
  })
}
