// cypress.config.js
const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({

reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl: 'https://naveenautomationlabs.com/opencart',
    setupNodeEvents(on, config) {
      return config;
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    env: {
      loginPath: '/index.php?route=account/login',
      registerPath: '/index.php?route=account/register'
    }
  }
});
