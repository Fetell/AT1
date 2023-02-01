const pageCommands = {
  search(word) {
    this
      .setValue('@searchBar', word)
      .strictClick({selector: '@submitButton', index: 0});
    return this; // Return page object for chaining
  }
};

module.exports = {
  url: 'http://en.wikipedia.org/',
  commands: [pageCommands],
  elements: {
    welcome: '#mp-welcome',
    searchBar: {selector: '//input[@name="search"]', locateStrategy: 'xpath'},
    submitButton: {selector:'#searchform > div > button'},
    pageTitle: {selector: '#firstHeading', index: 0}
  },
  sections:{
    topMenu: {
      selector: '.vector-user-links',
      elements: {
        logIn: '.vector-user-menu-login',
        creatAcc: '#pt-createaccount',
        contributions: '#pt-anoancontribs'
      }
    }
  }
}