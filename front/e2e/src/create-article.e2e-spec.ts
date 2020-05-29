import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { StockPage } from './stock.po';
import { CreatePage } from './create.po';
import { Article } from 'src/app/interfaces/article';

describe('workspace-project App', () => {
  let page: AppPage;
  let stockPage: StockPage;
  let createPage: CreatePage;

  beforeEach(() => {
    page = new AppPage();
    stockPage = new StockPage();
    createPage = new CreatePage();
  });

  it('should create an article', async () => {
    await page.navigateTo();
    await page.clickOnCheckStock();
    await stockPage.clickOnCreateButton();
    const article = {
      name: 'Protractor Test ' + Math.floor(Math.random() * 1e9),
      price: 12.23,
      qty: 12,
    } as Article;
    await createPage.fillForm(article);
    await createPage.submitForm();
    let isArticleExisting = await stockPage.checkIfArticleExists(article.name);

    expect(isArticleExisting).toEqual(true);
    await stockPage.select(article.name);
    await stockPage.clickOnDelete();
    isArticleExisting = await stockPage.checkIfArticleExists(article.name);

    expect(isArticleExisting).toEqual(false);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
