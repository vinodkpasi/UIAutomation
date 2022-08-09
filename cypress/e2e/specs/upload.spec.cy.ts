describe("Upload suite", () => {
  it("Upload test", () => {
    // launch URL
    cy.visit("https://the-internet.herokuapp.com/upload");

    // upload file with attachFile
    cy.get("#file-upload").attachFile("../uploads/testfile.txt");

    // click on upload button
    cy.get("#file-submit").click();

    // verify uploaded file
    cy.get("#uploaded-files").contains("testfile");
  });
});
