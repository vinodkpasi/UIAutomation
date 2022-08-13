const { defineConfig } = require('cypress');
const { isFileExist, findFiles } = require('cy-verify-downloads');

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://the-internet.herokuapp.com',
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (
          config.env &&
          config.env["incognito"] &&
          config.env["incognito"] === true
        ) {
          if (browser.name === "chrome") {
            launchOptions.args.push("--incognito");
          }
          if (browser.name === "firefox") {
            launchOptions.args.push("-private");
          }
          if (browser.name == "edge") {
            launchOptions.args.push("-inprivate");
          }
          if (browser.name === "electron") {
            launchOptions.preferences.incognito = true;
          }
        }
        return launchOptions;
      });

      // implement node event listeners here
      on('task', { isFileExist, findFiles });

      // eslint-disable-next-line global-require
      require('cypress-grep/src/plugin')(config);
      return config;
    },
  },
  env: {
    grepFilterSpecs: true,
    grep:'',
    grepTags:'',
    incognito: false
  },
  retries: { runMode: 2},
  video: false,
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
    charts: true,
    html: true,
    json: true,
    reportDir: 'cypress/reports',
    reportFilename: 'report',
    overwrite: false
  }
});
