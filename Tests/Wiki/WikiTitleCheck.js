module.exports = {
  "Check Wiki title": function (browser) {
    browser
      .url("http://ru.wikipedia.org/wiki/Wiki")
      .waitForElementVisible("#firstHeading", "Заголовок загружен");
    browser.assert.titleEquals("Вики — Википедия");
    browser.assert.textContains("#firstHeading", "Вики");

    browser.expect.title().to.contain("Вики — Википедия");
    browser.expect.element("#firstHeading").text.to.contain("Вики");

    browser.expect.title().to.equal("Вики — Википедия");
    browser.expect.element("#firstHeading").text.to.equal("Вики");

    browser.expect.title().to.match(/Вики — Википедия/);
    browser.expect.element("#firstHeading").text.to.match(/Вики/);

    browser.end();
  },
};