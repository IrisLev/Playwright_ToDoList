import { test, expect } from '@playwright/test';
import ToDoPage from '../pages/ToDoPage';
import toDocases from '../data/ItemsInput.json' assert { type: 'json' };

test.describe('Empty state test', () => {
  let thePage;
  test.beforeEach(async ({ page }) => {
    thePage = new ToDoPage(page);
    await thePage.navigate22do();
  });
  test('Placeholder text', async ({}) => {
    const actualText = await thePage.getPlaceholer();
    const expectedText = 'What needs to be done?';
    expect(expectedText).toBe(actualText);
  });
  test('verifyEmptyList', async ({}) => {
    const theList = await thePage.getToDoList();
    await expect(theList).toBeEmpty();
  });
  test('Verify texts', async ({}) => {
    const Title = await thePage.getHeaderText();
    await expect(Title).toContain('todos');
    const text_below = await thePage.getTextBelowTheList();
    await expect(text_below).toContain('Double-click to edit a todo');
  });
});

test.describe('Add new item', () => {
  let thePage;
  test.beforeEach(async ({ page }) => {
    thePage = new ToDoPage(page);
    await thePage.navigate22do();
  });
  test.only('Verify lelements in a new list item', async ({}) => {
    // const task = 'Feed cats';
    // await thePage.addTask(task);
    // await thePage.assertTaskIsInList(task);
    // const itemsCount = await thePage.numberOfTasksinTheList();
    // await expect(itemsCount).toBe(1);

    const task = 'Feed cats';
    await thePage.addTask(task);
    await thePage.assertTaskIsInList(task);
    await expect(thePage.)

  });
  test('add todos from external data', async ({ page }) => {
    for (const text of toDocases.valid) {
      await thePage.addTask(text);
      await thePage.assertTaskIsInList(text);
    }
  });
});
