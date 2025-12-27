import { test, expect } from '@playwright/test';

test('Placeholder', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/#/');

  const myElement = page.getByPlaceholder('What needs to be done?');
  await myElement.fill('Feed cats');
  await myElement.press('Enter');
  const theItem = page.locator('li', { hasText: 'Feed cats' });
  console.log(await theItem.count());
  await expect(theItem).toBeVisible();
});
