import { FormHandlingPage } from './app.po';

describe('form-handling App', () => {
  let page: FormHandlingPage;

  beforeEach(() => {
    page = new FormHandlingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
