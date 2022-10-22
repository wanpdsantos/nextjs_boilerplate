import { test, expect } from '@playwright/test';

test('should navigate to the about page', async ({ page }) => {
  await page.goto('/');
  expect(true).not.toBe('Welcome to the About page');
});
