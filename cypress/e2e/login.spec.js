/// <reference types="Cypress" />

describe("Testes de Login", () => {
    beforeEach(() => {

        cy.visit(Cypress.env('url'), {})
      })


    it('Login sucesso', () => {
      cy.login();
    })

    it('Login email invalido', () => {
        cy.login_invalido();
      })

});