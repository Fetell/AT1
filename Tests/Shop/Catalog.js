module.exports = {
  "Check Store title": function (browser) {
    browser
      .url("http://testshop.sedtest-school.ru/")
      .waitForElementVisible(".col-md-3", "Заголовок загружен");
    browser.assert.titleEquals("TestGym");
    browser.assert.textContains(".col-md-3", "Каталог");

    browser.expect.title().to.contain("TestGym");
    browser.expect.element(".col-md-3").text.to.contain("Каталог");

    browser.expect.title().to.equal("TestGym");
    browser.expect.element(".col-md-3").text.to.equal("Каталог");

    browser.expect.title().to.match(/TestGym/);
    browser.expect.element(".col-md-3").text.to.match(/Каталог/);

    browser.end();
  },
};