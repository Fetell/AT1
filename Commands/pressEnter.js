module.exports = {
  command: function(selector) {
    return this
      .waitForElementVisible(selector)
      .sendKeys(selector, browser.Keys.ENTER);
  }
};