describe("Browser popup window suite", () => {
  it("Handling new browser popup window", function () {
    cy.visit("https://alapanme.github.io/testing-cypress.html");

    //Switch to the browser popup window and perform some operation.
    cy.switchToWindow("https://the-internet.herokuapp.com/");
    cy.get("button").click();
    cy.get("h1").should("have.text", "Welcome to the-internet");

    //Switch back to the main window
    cy.go(-1);
    cy.get("button").should("have.text", "Try it");
  });
});
