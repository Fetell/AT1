module.exports = {
  '@tags': ['search'],

  before(browser) {
    browser.page.shop()
      .navigate()
      .waitForElementVisible('css selector','@welcome', 'Welcome title visible')
      .assert.textContains('@welcome', 'Главная', 'Welcome title ok')
  },

  after(browser) {
    browser.end();
  },

    'Search for word': function (browser) {
    let word = browser.globals.searchText;

    browser.assert.notEmpty('#nav_link_main')

    browser.page
      .shop()
      .search(word)
      .waitForElementVisible("#nav_link_main", "Page title here")
      .waitForElementVisible("@cardTitle", `${word} product here`)
      .assert.titleContains("TestGym", "title ok")
      .assert.textContains("@cardTitle", word, `${word} product ok`);
  },
};
