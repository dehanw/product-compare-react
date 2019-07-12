/// <reference types="cypress" />

describe("Product Comparison", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("selects two products to compare them", () => {
        // Click the Cherry Product
        cy.get("[data-cy=one-product]")
            .find("[data-cy=view-details]")
            .eq(0)
            .click();

        // Click the Orange Product
        cy.get("[data-cy=one-product]")
            .find("[data-cy=view-details]")
            .eq(1)
            .click();

        // Verify Cherry was added to the comparison list
        cy.get("[data-cy=product-compare]").contains("Cherry");

        // Verify Orange was added to the comparison list
        cy.get("[data-cy=product-compare]").contains("Orange");
    });
});