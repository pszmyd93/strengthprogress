import { StrengthprogressPage } from './app.po';

describe('strengthprogress App', () => {
  let page: StrengthprogressPage;

  beforeEach(() => {
    page = new StrengthprogressPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
