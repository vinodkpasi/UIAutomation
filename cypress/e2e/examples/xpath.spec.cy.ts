describe("Xpath suite", () => {
  it("Xpath test", () => {
    // launch URL
    cy.visit("https://the-internet.herokuapp.com");

    //Item count using xpath
    cy.xpath("//ul//li").should("have.length", 44);
  });
});
