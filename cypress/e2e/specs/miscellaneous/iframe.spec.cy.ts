describe("IFrame suite", () => {
  it("IFrame test", () => {
    // launch URL
    cy.visit("/iframe");

    // Validate default text inside iframe
    cy.switchToIframe("#mce_0_ifr").within(function () {
      cy.get("p").should("have.text", "Your content goes here.").clear();
    });

    // Validate header text in the main page
    cy.get("h3")
      .contains("An iFrame containing the TinyMCE WYSIWYG Editor")
      .should("be.visible");
  });
});
