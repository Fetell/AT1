module.exports = {
  "Wiki links compare": function (browser) {
    const expLinks = 620;
    browser
      .url("http://en.wikipedia.org/wiki/Wiki")
      .elements("css selector", '[href^="/wiki/"]', function (links) {
        let actLinks = links.value.length;
        browser.assert.ok(
          actLinks == expLinks,
          `Wiki links found: ${actLinks} of ${expLinks}`
        );
        browser.assert.equal(
          actLinks,
          expLinks,
          `Wiki links found: ${actLinks} of ${expLinks}`
        );
      });

    browser.expect.elements('[href^="/wiki/"]').count.to.equal(expLinks);

    browser.end();
  },
};