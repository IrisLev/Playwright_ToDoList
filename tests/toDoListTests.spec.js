import { test, expect } from '@playwright/test';
import ToDoPage from '../pages/ToDoPage';
import toDocases from '../data.ItemsInput.json';

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
  test.only('Add a new item to an empty state', async ({}) => {
    await thePage.addTask('Feed cats');
  });
});
