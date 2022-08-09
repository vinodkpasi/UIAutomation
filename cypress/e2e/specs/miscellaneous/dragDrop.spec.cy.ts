describe("Drag drop suite", () => {
  it("Drag drop test", () => {
    // launch URL
    cy.visit("/drag_and_drop");

    // Drag drop
    cy.get("#column-a header").drag("#column-b");
  });
});
