import {
  faker
} from '@faker-js/faker';
const nomeCompleto = `${faker.name.firstName()} ${faker.name.lastName()}`
const email = Cypress.env("inputEmail")
import dataLogin from '../../config/hml.json';
const loginPage = require('../page_elements/login_page')
const loginPg = new loginPage()


Cypress.Commands.add('login', () => {

    cy.get(loginPg.txt_titulo)
      .should('exist')
      .should('be.visible')
      .should('contains.text', 'Login to your account')

    cy.get(loginPg.inputEmail)
      .should('exist')
      .should('be.visible')
      .type(dataLogin.env.inputEmail)

    cy.get(loginPg.inputPassword)
      .should('exist')
      .should('be.visible')
      .type(dataLogin.env.inputPassword)

    cy.get(loginPg.btnLogin)
      .should('exist')
      .should('be.visible')
      .click()

    cy.get(loginPg.txtlogin)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'John Doe')

})

Cypress.Commands.add('login_invalido', () => {

  cy.get(loginPg.txt_titulo)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'Login to your account')

  cy.get(loginPg.inputEmail)
    .should('exist')
    .should('be.visible')
    .type(dataLogin.env.icorrectEmail)

  cy.get(loginPg.inputPassword)
    .should('exist')
    .should('be.visible')
    .type(dataLogin.env.inputPassword)

  cy.get(loginPg.btnLogin)
    .should('exist')
    .should('be.visible')
    .click()

  cy.get(loginPg.msg_error_email)
  .should('exist')
  .should('be.visible')
  .should('contains.text', 'Your email or password is incorrect!')

})