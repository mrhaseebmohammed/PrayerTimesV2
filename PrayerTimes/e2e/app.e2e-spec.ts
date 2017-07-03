import { PrayerTimesPage } from './app.po';

describe('prayer-times App', () => {
  let page: PrayerTimesPage;

  beforeEach(() => {
    page = new PrayerTimesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
