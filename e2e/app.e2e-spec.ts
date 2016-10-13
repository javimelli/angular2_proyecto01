import { Angular2Proyecto01Page } from './app.po';

describe('angular2-proyecto01 App', function() {
  let page: Angular2Proyecto01Page;

  beforeEach(() => {
    page = new Angular2Proyecto01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
