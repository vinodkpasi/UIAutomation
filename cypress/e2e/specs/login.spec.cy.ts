import LoginPage from "../pages/login.page";

describe("Login suite", function () {
  const login = new LoginPage();
  beforeEach(function () {
    login.navigate();
    cy.fixture("login").then(function (data) {
      this.data = data;
    });
  });

  it("Successful login", function () {
    login
      .login(this.data.username, this.data.password)
      .message.should("contain.text", this.data.successMessage);
  });

  it("Unsuccessful login with incorrect password", function () {
    login
      .login(this.data.username, this.data.incorrectPassword)
      .message.should("contain.text", this.data.errorMessageForInvalidPassword);
  });

  it("Unsuccessful login with incorrect username", function () {
    login
      .login(this.data.incorrectUsername, this.data.password)
      .message.should("contain.text", this.data.errorMessageForInvalidUsername);
  });

  it("Unsuccessful login with incorrect username and incorrect password", function () {
    login
      .login(this.data.incorrectUsername, this.data.incorrectPassword)
      .message.should(
        "contain.text",
        this.data.errorMessageForInvalidCredentials
      );
  });

  it("Unsuccessful login with empty username", function () {
    login.password.type(this.data.password);
    login.submit.click();
    login.message.should(
      "contain.text",
      this.data.errorMessageForEmptyUsername
    );
  });

  it("Unsuccessful login with empty password", function () {
    login.username.type(this.data.username);
    login.submit.click();
    login.message.should(
      "contain.text",
      this.data.errorMessageForEmptyPassword
    );
  });

  it("Unsuccessful login with empty username and password", function () {
    login.submit.click();
    login.message.should(
      "contain.text",
      this.data.errorMessageForEmptyCredentials
    );
  });
});
