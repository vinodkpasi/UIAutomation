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

import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';
import 'cypress-xpath';

require('cypress-grep')();
require('cy-verify-downloads').addCustomCommand();

// IFrame support
Cypress.Commands.add('switchToIframe', (iframe) => cy.get(iframe).its('0.contentDocument.body')
  .should('be.visible').then(cy.wrap));

// Handles unhandled exception
// eslint-disable-next-line no-unused-vars
Cypress.on('uncaught:exception', (err, runnable) => false);

Cypress.Commands.add("switchToWindow",(url)=>{
  cy.window().then((win) => {
    cy.stub(win, "open").callsFake(() => {
        win.location.href = url;
      });
  });
})

Cypress.Commands.add("viewsource", () => {
  cy.window().then((win) => {
    return cy.wrap(win.document.documentElement.outerHTML);
  });
});

Cypress.Commands.add("verifyBrokenLinks", () => {
  cy.get("a").each($a => {
    const message = $a.text();
    expect($a, message).to.have.attr("href").not.contain("undefined");
    cy.request($a.prop('href'));
  });
});