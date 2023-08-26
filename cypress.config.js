const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
  fixturesFolder: false,
  video: false,
  pageLoadTimeout: 220000,
});