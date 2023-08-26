class registerPage {
    constructor() {
      this.userName = '[data-qa="signup-name"]'
      this.emailAdress = '[data-qa="signup-email"]'
      this.buttonSignup = '[data-qa="signup-button"]'
      this.inputPassword ='[data-qa="password"]'
      this.selectDay ='[data-qa="days"]'
      this.selectMonth ='[data-qa="months"]'
      this.selectYear ='[data-qa="years"]'
      this.inputFirstName ='[data-qa="first_name"]'
      this.inputLastName ='[data-qa="last_name"]'
      this.inputCompany ='[data-qa="company"]'
      this.inputAdressCompany ='[data-qa="address"]'
      this.selectCountry ='[data-qa="country"]'
      this.inputState ='[data-qa="state"]'
      this.inputCity ='[data-qa="city"]'
      this.inputZipCode ='[data-qa="zipcode"]'
      this.inputMobileNumber ='[data-qa="mobile_number"]'
      this.buttonCreateAccount ='[data-qa="create-account"]'
      this.txtAcount = ':nth-child(1) > b'
      this.checkBox = '#id_gender1'
      this.creaAteccount = '[data-qa="create-account"]'
      this.mesgCreated = '.col-sm-9'
    }
}

module.exports = registerPage