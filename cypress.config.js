import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://dice-game-2d3b5.web.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
