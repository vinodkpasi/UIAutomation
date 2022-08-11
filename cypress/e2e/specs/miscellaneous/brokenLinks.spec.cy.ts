describe("BrokenLinks suite", () => {
  beforeEach(function () {
    // launch URL
    cy.visit("https://www.seoptimer.com/blog/broken-links/");
  });

  it("Broken links in current page test", () => {
    cy.verifyBrokenLinks();
  });

  it("Broken links within specific element test", () => {
    cy.get(".widget.widget_recent_entries")
      .first()
      .within(() => {
        cy.verifyBrokenLinks();
      });
  });
});
