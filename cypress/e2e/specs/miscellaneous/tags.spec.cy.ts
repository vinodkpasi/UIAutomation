describe("Tags suite", () => {
  it("works as an array", { tags: ["config", "some-other-tag"] }, () => {
    expect(true).to.be.true;
  });
  it("works as a string", { tags: "config" }, () => {
    expect(true).to.be.true;
  });
});
