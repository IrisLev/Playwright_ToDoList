export default class CommonActions {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async clickElement(locator) {
    await this.page.locator(locator).click();
  }
  async fillValue(locator, value) {
    await this.page.locator.fillValue(value);
  }
  async getText(locator) {
    return await this.page.locator.textContent(locator);
  }
  async checkItem(locator) {
    await this.page.locator.checkItem();
  }
  async isChecked(locator) {
    return await this.page.isChecked(locator);
  }
}
