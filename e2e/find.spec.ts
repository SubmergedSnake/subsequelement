import { test, expect } from '@playwright/test';


test('Find works', {
  tag: '@find',
}, async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Item One')).toBeVisible()
});

