import { LoginTaskAppPage } from './app.po';

describe('login-task-app App', () => {
  let page: LoginTaskAppPage;

  beforeEach(() => {
    page = new LoginTaskAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
