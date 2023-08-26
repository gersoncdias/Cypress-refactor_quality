class loginPage {
  constructor() {

    this.inputPassword = '[data-qa="login-password"]'
    this.btnLogin = '[data-qa="login-button"]'
    this.msgAlerta = '#form > .container > .row > .col-sm-offset-1 > .login-form > form > p'
    this.msgValue = '#form > .container > .row > .col-sm-offset-1 > .login-form > form > p'
    this.inputSenha = '[data-qa="login-password"]'
    this.buttonLogin = '[data-qa="login-button"]'
    this.inputEmail = '[data-qa="login-email"]'
    this.txt_titulo = '.login-form > h2'
    this.txtlogin = ':nth-child(10) > a'
    this.msg_error_email = '.login-form > form > p'
  }
}

module.exports = loginPage