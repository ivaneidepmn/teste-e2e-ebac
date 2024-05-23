const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    fixturesFolder: 'cypress/fixtures',
    supportFile: 'cypress/support/index.js'
  },
});

