module.exports = {
  "Wiki links count": function (browser) {
    browser
      .url("http://en.wikipedia.org/wiki/Wiki")
      .elements("css selector", '[href^="/wiki/"]', function (links) {
        console.log("Found", links.value.length, "Wiki links.");
      })
      .end();
  },
};