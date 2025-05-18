// cypress.config.js
const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://naveenautomationlabs.com/opencart',
    setupNodeEvents(on, config) {
      return config;
    },
    env: {
      loginPath: '/index.php?route=account/login',
      registerPath: '/index.php?route=account/register'
    }
  }
});
