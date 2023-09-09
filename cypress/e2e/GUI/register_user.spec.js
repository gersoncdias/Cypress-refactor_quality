/// <reference types="Cypress" />

describe("Cadasto de Usuario", () => {
    beforeEach(() => {

        cy.visit(Cypress.env('url'), {})
      })

    it("Criar cadasro de usuario", () => {
        cy.register();
        cy.input_form()
        
    });





});