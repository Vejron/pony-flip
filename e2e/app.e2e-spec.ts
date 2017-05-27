import { TurfWarPage } from './app.po';

describe('turf-war App', () => {
  let page: TurfWarPage;

  beforeEach(() => {
    page = new TurfWarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
