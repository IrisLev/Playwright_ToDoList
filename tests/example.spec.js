import { test, expect } from '@playwright/test';

test('Placeholder', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/#/');

  // Option 1: Use the class selector
  //const myElement = page.locator('.header>h1');
  const myElement = page.getByRole('textbox', { id: '#todo-input' });
  await myElement.fill('Feed cats');
  await myElement.press('Enter');
});
