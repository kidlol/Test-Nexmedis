// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Cypress.Commands.add("successLogin", () => {
//     // cy.visit('https://smoketest.trustmedis.com/');
//     // cy.visit('https://testing.trustmedis.id/');
//     cy.visit('https://testing2.trustmedis.id/');
//     cy.get('#logo');
//     cy.get('#login-username').type('dickytester');
//     cy.get('#login-password').type('Admin123');
//     cy.get('#shift').select('Shift 1');
//     cy.get('#submit').click();
//     cy.wait(2000);
//     cy.get('#login_staffnama').should('be.visible');
// });

// Cypress.on("uncaught:exception", (err) => {
//     // Cypress and React Hydrating the document don't get along
//     // for some unknown reason. Hopefully we figure out why eventually
//     // so we can remove this.
//     if (
//       /hydrat/i.test(err.message) ||
//       /Minified React error #418/.test(err.message) ||
//       /Minified React error #423/.test(err.message)
//     ) {
//       return false;
//     }
// });