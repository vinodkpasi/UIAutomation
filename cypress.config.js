const { defineConfig } = require('cypress');
const { isFileExist, findFiles } = require('cy-verify-downloads');

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://the-internet.herokuapp.com',
    setupNodeEvents(on, config) {
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
    grepTags:''
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
