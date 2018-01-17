import { ProgressbardemoAngularPage } from './app.po';

describe('progressbardemo-angular App', () => {
  let page: ProgressbardemoAngularPage;

  beforeEach(() => {
    page = new ProgressbardemoAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
