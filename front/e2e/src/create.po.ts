import { browser, by, element } from 'protractor';
import { Article } from '../../src/app/interfaces/article';

export class CreatePage {
  async fillForm(article: Article) {
    const inputName = element(by.css('input[formcontrolname="name"]'));
    await inputName.clear();
    await inputName.sendKeys(article.name);
    const inputPrice = element(by.css('input[formcontrolname="price"]'));
    await inputPrice.clear();
    await inputPrice.sendKeys(article.price);
    const inputQty = element(by.css('input[formcontrolname="qty"]'));
    await inputQty.clear();
    await inputQty.sendKeys(article.qty);
  }

  async submitForm() {
    const button = element(by.css('button[type="submit"]'));
    await button.click();
  }
}
