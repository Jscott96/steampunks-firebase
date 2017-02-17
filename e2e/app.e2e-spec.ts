import { SteampunksPage } from './app.po';

describe('steampunks App', function() {
  let page: SteampunksPage;

  beforeEach(() => {
    page = new SteampunksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
