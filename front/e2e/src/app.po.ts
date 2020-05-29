import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('header span')).getText() as Promise<string>;
  }

  async clickOnCheckStock(): Promise<void> {
    const button = element(by.css('button'));
    await button.click();
  }
}
