import { HttpIntroPage } from './app.po';

describe('http-intro App', () => {
  let page: HttpIntroPage;

  beforeEach(() => {
    page = new HttpIntroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
