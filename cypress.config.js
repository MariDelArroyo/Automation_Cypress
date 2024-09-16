const { defineConfig } = require('cypress');
//require('dotenv').config();  

module.exports = defineConfig({
  defaultCommandTimeout:30000,
  env: {
    URL: 'https://www.youtube.com/',
    Search: 'ElMariana'
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});
