module.exports = {
  before(browser) {
    browser
      .url("http://testshop.sedtest-school.ru/")
      .waitForElementVisible("#nav_link_main", "Welcome title here");
    browser.assert.textContains(
      "#nav_link_main",
      "Главная",
      "Welcome title ok"
    );
  },

  after(browser) {
    browser.end();
  },

  "Search for first product": function (browser) {
    browser.setValue(".form-control", ["Ручка", browser.Keys.ENTER]);

    browser
      .waitForElementVisible("#nav_link_main", "Page title here")
      .assert.urlContains(encodeURI("&search=Ручка"))
      .assert.titleContains("TestGym", "title ok")
      .assert.textContains(
        ".card-title",
        "Ручка Паркер",
        "First product title ok"
      );
  },
  "Search for second product": function (browser) {
    browser.setValue(".form-control", ["яблоко", browser.Keys.ENTER]);

    browser
      .waitForElementVisible("#nav_link_main", "Page title here")
      .assert.urlContains(encodeURI("&search=яблоко"))
      .assert.titleContains("TestGym", "title ok")
      .assert.textContains(
        ".card-title",
        "Супер яблоко",
        "Second product title ok"
      );
  },
};
