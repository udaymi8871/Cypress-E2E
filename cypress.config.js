// // cypress.config.js
// const { defineConfig } = require("cypress");
// require("dotenv").config();

// module.exports = defineConfig({

// reporter: 'cypress-mochawesome-reporter',

//   e2e: {
//     baseUrl: 'https://naveenautomationlabs.com/opencart',
//     setupNodeEvents(on, config) {
//       return config;
//       require('cypress-mochawesome-reporter/plugin')(on);

//     },
//     env: {
//       loginPath: '/index.php?route=account/login',
//       registerPath: '/index.php?route=account/register'
//     }
//   }
// });



const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/html',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'mmddyyyy_HHMMss'
  },

  e2e: {
    baseUrl: 'https://naveenautomationlabs.com/opencart',

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); // ✅ This now gets executed
      return config;
    },

    env: {
      loginPath: '/index.php?route=account/login',
      registerPath: '/index.php?route=account/register'
    }
  }
});