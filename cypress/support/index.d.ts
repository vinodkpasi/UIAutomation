/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to switch to iframe body by locator.
       * @example cy.switchToIframe('locator')
       */
       switchToIframe(locator: string): Chainable<Element>;
    }
  }