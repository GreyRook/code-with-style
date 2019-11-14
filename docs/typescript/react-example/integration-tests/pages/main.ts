module.exports = {
  url: 'http://frontend:8080/',
  elements: {
    spinStarterButton: {
      selector: '.App-header > button'
    },
    appLogo: {
      selector: '.App-logo'
    },
    seventhButton: {
      selector: '//button[7]',
      locateStrategy: 'xpath'
    }
  }
};