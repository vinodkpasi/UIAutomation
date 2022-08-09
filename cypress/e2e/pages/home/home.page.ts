import BasePage from "../base.page";

class HomePage extends BasePage {
  navigate() {
    cy.visit("/");
    cy.get("h1").should("have.text", "Welcome to the-internet");
    return this;
  }
}
export default HomePage;
