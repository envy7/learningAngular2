import { SpotifyClonePage } from './app.po';

describe('spotify-clone App', () => {
  let page: SpotifyClonePage;

  beforeEach(() => {
    page = new SpotifyClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
