class LoginPage {
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
    this.username.type(username);
    this.password.type(password);
    this.submit.click();
    return this;
  }
}
export default LoginPage;
