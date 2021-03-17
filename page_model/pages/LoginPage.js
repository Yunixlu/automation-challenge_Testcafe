import {Selector, t, Role} from 'testcafe'

class LoginPage{
    constructor(){
        this.usernameField = Selector('input[name="user-name"]')
        this.passwordField = Selector('input[name="password"]')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('h3,error-button')
    }

    async submitLoginForm(username, password){
        await t.typeText(this.usernameField, username)
        await t.typeText(this.passwordField,password)
        await t.click(this.loginButton)
    }

}

export default new LoginPage()