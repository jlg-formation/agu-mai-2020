import { browser, by, element } from 'protractor';

export class StockPage {

  async clickOnCreateButton(): Promise<void> {
    const button = element(by.buttonText('Créer'));
    await button.click();
  }

  async checkIfArticleExists(articleName: string): Promise<boolean> {
    const div = element(by.cssContainingText('.body .cell.name', articleName));
    return await div.isPresent();
  }

  async select(articleName: string): Promise<void> {
    await element(by.cssContainingText('.body .cell.name', articleName)).click();
  }

  async clickOnDelete(): Promise<void> {
    await element(by.cssContainingText('button', 'Supprimer')).click();
  }

}
