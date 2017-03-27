import { HotelSearchEnginePage } from './app.po';

describe('hotel-search-engine App', () => {
  let page: HotelSearchEnginePage;

  beforeEach(() => {
    page = new HotelSearchEnginePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
