module.exports = {
  tags: ['app', 'player2'],
  'Test navigation to app': function (browser: any) {
    console.log("http://frontend:8080/");
    browser.url("http://frontend:8080/");
    browser.expect.element(".App").to.be.present;
  },
  'Test if logo can be toggled spinning': function (browser: any) {
    browser.url("http://frontend:8080/");
    browser.expect.element(".App-logo").has.not.css("class").which.not.contain(".App-logo-animation");
  }
};
