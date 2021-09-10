import {
  browser,
  by,
  element
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Navbar', () => {
  beforeEach(async () => {
    await SkyHostBrowser.get('visual/navbar');
  });

  it('should match previous navbar screenshot', (done) => {
    expect('#screenshot-navbar').toMatchBaselineScreenshot(
      done,
      {
        screenshotName: 'navbar'
      }
    );
  });

  it('should match previous navbar screenshot when the user mouses over an item', async (done) => {
    await browser.actions()
      .mouseMove(element(by.css('.first-item')))
      .perform();

    expect('#screenshot-navbar').toMatchBaselineScreenshot(
      done,
      {
        screenshotName: 'navbar-item-over'
      }
    );
  });

  it('should match previous navbar screenshot when a dropdown is open', async (done) => {
    await browser.actions()
      .mouseMove(element(by.css('.sky-dropdown-button')))
      .perform();

    expect('#screenshot-navbar').toMatchBaselineScreenshot(
      done,
      {
        screenshotName: 'navbar-dropdown-open'
      }
    );
  });

  it('should match previous navbar screenshot when the user is over a dropdown item', async (done) => {
    await browser.actions()
      .mouseMove(element(by.css('.sky-dropdown-button')))
      .perform();

    await browser.actions()
      .mouseMove(element(by.css('.sky-dropdown-item:first-child')))
      .perform();

    expect('#screenshot-navbar').toMatchBaselineScreenshot(
      done,
      {
        screenshotName: 'navbar-dropdown-item-over'
      }
    );
  });

  it(
    'should match previous navbar screenshot when an item is active via the item CSS class',
    (done) => {
      expect('#screenshot-navbar-active-item').toMatchBaselineScreenshot(
        done,
        {
          screenshotName: 'navbar-item-active'
        }
      );
    }
  );

  it(
    'should match previous navbar screenshot when an item is active via a child CSS class',
    (done) => {
      expect('#screenshot-navbar-active-child').toMatchBaselineScreenshot(
        done,
        {
          screenshotName: 'navbar-item-active-child'
        }
      );
    }
  );
});
