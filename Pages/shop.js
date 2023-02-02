const pageCommands = {
  search(word) {
    this.setValue("@searchBar", word).pressEnter({
      selector: "@searchBar",
      index: 0,
    });
    return this; // Return page object for chaining
  },
};

module.exports = {
  url: "http://testshop.sedtest-school.ru/",
  commands: [pageCommands],
  elements: {
    welcome: "#nav_link_main",
    searchBar: { selector: 'input[name="search"]' },
    catalog: { selector: ".col-md-3", index: 0 },
    cardTitle: { selector: ".card-title", index: 0 },
  },
};
