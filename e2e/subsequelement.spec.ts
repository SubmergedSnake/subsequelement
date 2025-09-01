import { test, expect } from '@playwright/test';
import { Options } from '../src/types';
import { subsequelement } from '../src/subsequelement';

test('subsequelement works', async ({ page }) => {
  await page.goto('/simplegrid')
  await expect(page.getByText('Item A')).toBeVisible()

  const elementId = await page.evaluate(() => {

    const startingElement = document.getElementById('A')

    const options: Options = {
      selectors: ['article'],
      emphasizeAlign: true
    }

    let element

    if (startingElement) {
      element = subsequelement.closest(startingElement, 's', options)
    }

    return element?.id

  })


  expect(elementId).toEqual('D')
});

