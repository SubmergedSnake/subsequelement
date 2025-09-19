import { test, expect } from '@playwright/test';
import { PerformanceTest } from '../specs/testtypes';


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
          // @ts-ignore
          currentElement = window.near(currentElement as Element, args.bearing, ['article'], args.HasToAlign) as Element
        } else {
          // @ts-ignore
          currentElement = window.near(startingElement as Element, args.bearing, ['article'], args.HasToAlign) as Element
        }
        currentStep++
      } while (currentElement || currentStep < steps)
      const stop = performance.now()
      return steps / (stop - start)

    }, performanceTest)
    expect(duration).toBeLessThan(performanceTest.maxDuration)
  })
}
