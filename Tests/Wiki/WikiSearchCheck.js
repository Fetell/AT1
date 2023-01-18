module.exports = {
  before(browser) {
    browser
      .url("http://en.wikipedia.org/")
      .waitForElementVisible("#mp-welcome", "Welcome title here");
    browser.assert.textContains(
      "#mp-welcome",
      "Welcome to Wikipedia",
      "Welcome title ok"
    );
  },

  after(browser) {
    browser.end();
  },

  "Search for Lego": function (browser) {
    browser.setValue("#searchInput", "Lego").click('[name="go"]');

    browser
      .waitForElementVisible("css selector", "#firstHeading", "Page title here")
      .assert.urlContains("/wiki/Lego")
      .assert.titleContains("Lego - Wikipedia", "title ok")
      .assert.textContains("#firstHeading", "Lego", "Lego title ok");
  },

  "Search for ABC": function (browser) {
    browser.setValue("#searchInput", "ABC").click('[name="go"]');

    browser
      .waitForElementVisible("css selector", "#firstHeading", "Page title here")
      .assert.urlContains("/wiki/ABC")
      .assert.titleContains("ABC - Wikipedia", "title ok")
      .assert.textContains("#firstHeading", "ABC", "ABC title ok");
  },
};
