describe("IFrame suite", () => {
  it("IFrame test", () => {
    // launch URL
    cy.visit("https://the-internet.herokuapp.com/iframe");

    // Validate default text
    cy.switchToIframe("#mce_0_ifr")
      .find("p")
      .should("have.text", "Your content goes here.");
  });
});
