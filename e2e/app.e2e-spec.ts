import { TestFrontendTunaikuPage } from './app.po';

describe('test-frontend-tunaiku App', () => {
  let page: TestFrontendTunaikuPage;

  beforeEach(() => {
    page = new TestFrontendTunaikuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
