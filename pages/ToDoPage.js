import CommonActions from '../utils/CommonActions';

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
    //this.actions.fillValue(this.textField, task);
    const myElement = this.page.getByRole('textbox', { id: '#todo-input' });
    await myElement.fill('Feed cats');
    await myElement.press('Enter');
  }
}
