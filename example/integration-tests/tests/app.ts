module.exports = {
  tags: ['app'],
  'Test navigation to app': function (browser: any) {
    browser.url("http://frontend:8080/");
    browser.expect.element(".App").to.be.present;
  },
  'Test if logo is not spinning on load': function (browser: any) {
    browser.url("http://frontend:8080/");
    browser.expect.element(".App-logo").has.css("class").which.not.contain("App-logo-animation");
  },
  'Test if SpinButton is visible and toggles logo-spinning on click': function (browser: any) {
    let mainPage = browser.page.main();
    mainPage.navigate()
      .assert.visible('@spinStarterButton')
      .assert.cssClassNotPresent('@appLogo', 'App-logo-animation')
      .click('@spinStarterButton')
      .assert.cssClassPresent('@appLogo', 'App-logo-animation')
      .click('@spinStarterButton')
      .assert.cssClassNotPresent('@appLogo', 'App-logo-animation')
  },
  'Assert that there is only one button in the beginning \
  and add 10 new buttons with labels from 1 to 10': function (browser: any) {
      let i = 1;
      let mainPage = browser.page.main();
      mainPage.navigate();

      browser.assert.elementCount('button', '==', 1)
      while(i < 10) browser.addButton('button', i++);
      mainPage.assert.containsText('@seventhButton', '7');


  }
};
