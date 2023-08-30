module.exports = {
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
  fixturesFolder: false,
  video: false,
  env: {
    environment: "hml",
    url: "https://automationexercise.com/login"
  },
};
