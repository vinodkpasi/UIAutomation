describe("Download verification suite", () => {
  it("Download verification test", () => {
    // launch URL
    cy.visit("https://the-internet.herokuapp.com/download");
    cy.window()
      .document()
      .then((doc) => {
        doc.addEventListener("click", () => {
          setTimeout(() => {
            doc.location.reload();
          }, 5000);
        });

        cy.get(".example>a")
          .first()
          .then((ele) => {
            const filename = ele.text();

            // Download file
            cy.wrap(ele).click();

            // Verfy file
            cy.verifyDownload(filename);
          });
      });
  });
});
