import { Ng2HhjPage } from './app.po';

describe('ng2-hhj App', function() {
  let page: Ng2HhjPage;

  beforeEach(() => {
    page = new Ng2HhjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
