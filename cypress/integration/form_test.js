describe("Test Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("Testing DropDown", () => {
    cy.visit("http://localhost:3001/pizza");
    cy.get("select[name=size]").select("large");
    cy.get("select[name=sauce]").select("red");
  });
  it("Testing Submit and multiple toppings", () => {
    cy.visit("http://localhost:3001/pizza");
    cy.get("select[name=size]").select("large");
    cy.get("select[name=sauce]").select("red");
    cy.get("input[name=name]").type("nathan");
    cy.get("input[name=pep]").click();
    cy.get("input[name=mush]").click();
    cy.get("button[name=sub]").click();
  });
  it("Testing Text Input", () => {
    cy.visit("http://localhost:3001/pizza");
    cy.get("input[name=specInst]").type("test");
  });
});
