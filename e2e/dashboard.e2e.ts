import { browser, element, by, $, protractor } from 'protractor/globals';

describe('basic e2e test with loading', function(): void {
  let EC = protractor.ExpectedConditions;
  describe('home', function(): void {
    browser.get('/');
    it('should load home page', function(): void {
      expect(browser.getTitle()).toBe('Covalent QuickStart');
      // Waits for the element 'td-loading' to not be present on the dom.
      browser.wait(EC.not(EC.presenceOf($('td-loading'))), 10000)
      .then(() => {

        // checks if elements were rendered
        expect(element(by.id('dashboard-favorites-card')).isPresent()).toBe(true);
      });
    });
  });
});
