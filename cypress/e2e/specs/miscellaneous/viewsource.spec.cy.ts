describe("Viewsource suite", () => {
  it("Viewsource test", () => {
    // launch URL
    cy.visit("/");
     
    //Verify text in viewsource
     cy.viewsource().should("contain", "Geolocations");
  });
});
