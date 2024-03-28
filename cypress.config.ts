import { defineConfig } from 'cypress';

module.exports = defineConfig({
   e2e: {
      reporter: 'cypress-mochawesome-reporter',
      reporterOptions: {
         dcumentationUrl:
            'https://www.npmjs.com/package/cypress-mochawesome-reporter',
         charts: true,
         reportPageTitle: 'Nuveen Shopping Cart Cypress Scripts',
         embeddedScreenshots: true,
         inlineAssets: true,
         saveAllAttempts: false,
         videoOnFailOnly: true,
      },
      baseUrl: 'https://naveenautomationlabs.com/',
      screenshotsFolder: './cypress/screenshots',
      videosFolder: './cypress/videos',
      viewportHeight: 1080,
      viewportWidth: 1920,
      video: true,
      setupNodeEvents(on, config) {
         require('cypress-mochawesome-reporter/plugin')(on);
      },
   },
});
