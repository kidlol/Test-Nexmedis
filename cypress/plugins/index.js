/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
const { Client } = require('pg');
const cypressPostgres = require('cypress-postgres');

module.exports = (on, config) => {
  cypressPostgres.loadDBPlugin(on, config, Client);
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    // on('task', require('./swap-env'));
  on("before:browser:launch", (browser, launchOptions) => {
      console.log(launchOptions.args);
      if (browser.name === "chrome") {
        launchOptions.args.push("--incognito");
      }
      return launchOptions;
    });

  on('task', {
    queryDb({ query, dbConfig }) {
      const client = new Client(dbConfig);
      return client.connect()
        .then(() => client.query(query.text))
        .then((res) => {
          client.end();
          return res;
        })
        .catch((err) => {
          client.end();
          throw err;
        });
    }
  });
};
