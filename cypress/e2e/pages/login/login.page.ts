import BasePage from "../base.page";

class LoginPage extends BasePage {
  navigate() {
    cy.visit("/login");
    cy.get("h2").should("have.text", "Login Page");
    return this;
  }
  get message() {
    return cy.get("#flash-messages");
  }
  get username() {
    return cy.get("#username");
  }
  get password() {
    return cy.get("#password");
  }
  get submit() {
    return cy.get("[type=submit]");
  }

  login(username: string, password: string) {
    this.username.clear();
    this.username.type(username);
    this.password.clear();
    this.password.type(password);
    this.submit.click();
    return this;
  }
}
export default LoginPage;
