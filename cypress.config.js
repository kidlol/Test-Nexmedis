const { defineConfig } = require("cypress");
const { Client } = require('pg');
const pgConfig = {
  user: "ts_product",
  password: "ts_product",
  host: "10.87.120.1",
  database: "cloud_hospital",
  ssl: false,
  port: 5435
}

module.exports = defineConfig({
  chromeWebSecurity: false,
    // retries: 2,
    reporter : 'mochawesome',
    viewportWidth : 1920,
    viewportHeight : 1080,
    defaultCommandTimeout: 5000,
    watchForFileChanges: false,
    videos: false,
    screenshotOnRunFailure : true,
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    fixturesFolder: "cypress/fixture",
    experimentalStudio: true,
  e2e: {
    setupNodeEvents(on, config) 
    {
      // implement node event listeners here
      on("before:browser:launch", (browser, launchOptions) => {
        console.log(launchOptions.args);
        if (browser.name === "chrome") {
          launchOptions.args.push("--incognito");
        }
        return launchOptions;
      });

      // on('task', { queryDb({ query, dbConfig }) 
      // {
      //   const client = new Client(dbConfig);
      //   return client.connect()
      //     .then(() => client.query(query.text))
      //     .then((res) => {
      //       client.end();
      //       return res;
      //     })
      //     .catch((err) => {
      //       client.end();
      //       throw err;
      //     });
      //   }
      // });

      on("task", {
        async getOtp() {
          const { getOtpFromEmail } = require("./cypress/plugins/fetchOTP");
          const otp = await getOtpFromEmail();
          return otp;
        },
      });
    },
  },
});
