import TextBoxPage from "../../PageObjects/texBoxPage.page";

describe("Elements", () => {
  context("Text Box scenarios", () => {
    beforeEach(() => {
      cy.visit("https://demoqa.com/text-box");
    });

    it("Text Box Positive", () => {
     // Intercations with elements
     cy.get("#userName").type("Donald Trump");
     cy.get("#userEmail").type("random@email.com");
     cy.get("textarea#currentAddress").type("Random Current Address");
     cy.get("textarea#permanentAddress").type("Random Permanent Address");
     cy.get("button#submit").click();
     // Validation
     TextBoxPage.nameSection.should("have.text", "Name:Donald Trump");
     TextBoxPage.emailSection.should("have.text", "Email:random@email.com");
     TextBoxPage.currentAddressSection.should(
        "contain.text",
        "Current Address :Random Current Address"
      );
      TextBoxPage.permanentAddressSection.should(
      "contain.text",
      "Permananet Address :Random Permanent Address"
    );
    });
    it.only("Text Box Negative", () => {
      TextBoxPage.emailField.should("not.have.class", "field-error");
      TextBoxPage.emailField.type("random@email.com");
      TextBoxPage.submitButton.click;
      TextBoxPage.emailField.should("have.class", "field-error");
    });
  });
});