module.exports = {
  '@tags': ['main-page'],

  before(browser) {
    browser.page.shop()
      .navigate()
      .waitForElementVisible('css selector','@welcome', 'Welcome title visible')
      .assert.textContains('@welcome', 'Главная', 'Welcome title ok')
  },

  after(browser) {
    browser.end();
  },

  "Check Shop title": function (browser) {
    browser.page.shop()
      .waitForElementVisible("#nav_link_main", 'Page title here')
      .assert.titleEquals("TestGym", "title ok")
      .assert.textContains('@catalog', "Каталог")
      .assert.titleContains("TestGym")
      .assert.textEquals('@catalog', "Каталог")
      .assert.titleMatches(/TestGym/)
      .assert.textMatches('@catalog', /Каталог/);
  },
};