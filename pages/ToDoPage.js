import { expect } from 'playwright/test';
import CommonActions from '../utils/CommonActions';
import { count } from 'node:console';

export default class ToDoPage {
  constructor(page) {
    this.actions = new CommonActions(page);
    this.page = page;
  }

  async navigate22do() {
    await this.actions.navigate('https://todomvc.com/examples/react/dist/#/');
  }
  async getPlaceholer() {
    return await this.page.getByRole('textbox', { id: '#todo-input' }).getAttribute('placeholder');
  }
  async getToDoList() {
    return await this.page.locator('ul.todo-list');
  }
  async getHeaderText() {
    return await this.page.locator('.header>h1').textContent();
  }
  async getTextBelowTheList() {
    return this.page.getByRole('contentinfo', { class: '.footer' }).textContent();
  }
  async addTask(task) {
    const myElement = this.page.getByRole('textbox', { id: '#todo-input' });
    await myElement.fill(task);
    await myElement.press('Enter');
  }
  async assertTaskIsInList(task) {
    const myElement = this.page.locator('ul.todo-list');
    await expect(myElement).toContainText(task);
  }
  async isListItemVisible(text) {
    // return await this.page.locator('ul.todo-list li').filter({ hasText: text }).count();
    return await this.page.locator('li', { hasText: text }).count();
  }
  async numberOfTasksinTheList() {
    return await this.page.locator('ul.todo-list>li').count();
  }
}
