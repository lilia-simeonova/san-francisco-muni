import { TestPrPage } from './app.po';

describe('test-pr App', () => {
  let page: TestPrPage;

  beforeEach(() => {
    page = new TestPrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
