module.exports = {
  src_folders: ["Tests"],
  page_objects_path: ["Pages"],
  custom_commands_path: ["Commands"],
  custom_assertions_path: ["Assertions"],

  plugins: [],

  globals_path: "",

  webdriver: {},

  test_workers: {
    enabled: true,
  },

  test_settings: {
    default: {
      globals: {
        searchText: "Lego",
      },
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: ["window-size=1920,1080"],
        },
      },
      webdriver: {
        start_process: true,
        server_path: "",
      },
    },
    firefox: {
      globals: {
        searchText: "ABC",
      },
      desiredCapabilities: {
        browserName: "firefox",
      },
      webdriver: {
        start_process: true,
        server_path: "",
      },
    },
  },
};
