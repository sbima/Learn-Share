import { LearnNsharePage } from './app.po';

describe('learn-nshare App', () => {
  let page: LearnNsharePage;

  beforeEach(() => {
    page = new LearnNsharePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
