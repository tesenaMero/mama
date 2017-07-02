import { MamkasitePage } from './app.po';

describe('mamkasite App', () => {
  let page: MamkasitePage;

  beforeEach(() => {
    page = new MamkasitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
