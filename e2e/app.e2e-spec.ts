import { FotosFireBasePage } from './app.po';

describe('fotos-fire-base App', () => {
  let page: FotosFireBasePage;

  beforeEach(() => {
    page = new FotosFireBasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
