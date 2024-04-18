const { defineConfig } = require('cypress');

module.exports = defineConfig({
   e2e: {
      projectId: 'ckgy26',
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
      experimentalRunAllSpecs: true,
      fixturesFolder: './cypress/fixtures',
      screenshotsFolder: './cypress/screenshots',
      specPattern: '**/*.cy.ts',
      testIsolation: false,
      videosFolder: './cypress/videos',
      viewportHeight: 1080,
      viewportWidth: 1920,
      video: true,
      setupNodeEvents(on: any, config: any) {
         require('cypress-mochawesome-reporter/plugin')(on);
         require('@cypress/grep/src/plugin')(config);
         return config;
      },
   },
});
