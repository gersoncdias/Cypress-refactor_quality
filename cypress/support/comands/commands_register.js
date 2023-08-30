import {faker} from '@faker-js/faker';
const email = faker.internet.email()
const loginPage = require('../page_elements/login_page')
const loginPg = new loginPage()
const registerPage = require('../page_elements/register_page')
const registerPg = new registerPage()
let dataLogin;
if (Cypress.env('environment') === 'hml') {
  dataLogin = require('../../config/hml.json');
} else if (Cypress.env('environment') === 'hml_usa') {
  dataLogin = require('../../config/hml_usa.json');
}

Cypress.Commands.add('register', () => {

  cy.get(loginPg.txt_titulo)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'Login to your account')

  cy.get(registerPg.userName)
    .should('exist')
    .should('be.visible')
    .type(dataLogin.env.fullname)
    
  cy.get(registerPg.emailAdress)
    .should('exist')
    .should('be.visible')
    .type(email)

  cy.get(registerPg.buttonSignup)
    .should('exist')
    .should('be.visible')
    .click()
})

Cypress.Commands.add('input_form', () => {

  cy.get(registerPg.txtAcount)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'Enter Account Information')

  cy.get(registerPg.checkBox)
    .should('exist')
    .should('be.visible')
    .check() 

  cy.get(registerPg.inputPassword)
    .should('exist')
    .should('be.visible')
    .type(dataLogin.env.inputPassword)
    
  cy.get(registerPg.selectDay)
    .should('exist')
    .should('be.visible')
    .select(dataLogin.env.inputDay)

  cy.get(registerPg.selectMonth)
    .should('exist')
    .should('be.visible')
    .select(dataLogin.env.selectMonth)

  cy.get(registerPg.selectYear)
    .should('exist')
    .should('be.visible')
    .select(dataLogin.env.selectYear)

  cy.get(registerPg.inputFirstName)
    .should('exist')
    .should('be.visible')
    .type(dataLogin.env.firstName)

  cy.get(registerPg.inputLastName)
    .should('exist')
    .should('be.visible')
    .type(dataLogin.env.lastName)

  cy.get(registerPg.inputCompany)
    .should('exist')
    .should('be.visible')
    .type(dataLogin.env.company)

  cy.get(registerPg.inputAdressCompany)
    .should('exist')
    .should('be.visible')
    .type(dataLogin.env.adresscompany)

  cy.get(registerPg.selectCountry)
    .should('exist')
    .should('be.visible')
    .select(dataLogin.env.country)

  cy.get(registerPg.inputState)
    .should('exist')
    .should('be.visible')
    .type(dataLogin.env.State)

  cy.get(registerPg.inputCity)
    .should('exist')
    .should('be.visible')
    .type(dataLogin.env.city)

  cy.get(registerPg.inputZipCode)
    .should('exist')
    .should('be.visible')
    .type(dataLogin.env.zipCzde)

  cy.get(registerPg.inputMobileNumber)
    .should('exist')
    .should('be.visible')
    .type(dataLogin.env.telnumber)


   cy.get(registerPg.creaAteccount)
    .should('exist')
    .should('be.visible')
    .should('contains.text', 'Create Account')
    .click()
    
  cy.url()
    .should('be.equal', 'https://automationexercise.com/account_created')

   cy.get(registerPg.mesgCreated)
     .should('exist')
     .should('be.visible')
     .should('contains.text', 'Congratulations! Your new account has been successfully created!')
})
