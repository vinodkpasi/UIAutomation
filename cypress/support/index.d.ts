/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to switch to iframe body by locator.
     * @example cy.switchToIframe('locator')
     */
    switchToIframe(locator: string): Chainable<Element>;

    /**
     * Custom command to switch to browser popup window by url.
     * @example cy.switchToWindow('url')
     */
    switchToWindow(locator: string): void;

    /**
     * Custom command to get the browser viewsource
     * @example cy.viewsource()
     */
    viewsource(): Chainable<Element>;
  }
}
