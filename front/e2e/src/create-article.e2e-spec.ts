import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should create an article', async () => {
    await page.navigateTo();
    await page.clickOnCheckStock();
    await stockPage.clickOnCreateButton();
    await createPage.fillForm({
      name: 'Tournevis',
      price: 12.23,
      qty: 12,
    });
    await createPage.SubmitForm();
    let isArticleExisting = await stockPage.checkIfArticleExists('Tournevis');

    expect(isArticleExisting).toEqual(true);
    await stockPage.select('Tournevis');
    await stockPage.clickOnDelete();
    isArticleExisting = await stockPage.checkIfArticleExists('Tournevis');

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
