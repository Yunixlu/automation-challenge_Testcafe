import LoginPage from '../pages/LoginPage'
import {CREDENTIALS} from '../data/Constants'
import ProductsPage from '../pages/ProductsPage'
import Roles from '../pages/Roles'



fixture('Login feature testing')
    .page `https://www.saucedemo.com/`

test('Login with a valid user', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductsPage.pageTitle.exists).ok()
})

test('Login with an invalid user', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.errorMessage.innerText).eql(CREDENTIALS.ERROR_MESSAGE.NOTMATCH)
})
/*
test('Login with different roles', async t =>{
    await t.useRole(Roles.normalAccUser)
    await t.expect(ProductsPage.pageTitle.exists).ok()
    await t.useRole(Roles.secondAccUser)
    await t.expect(ProductsPage.pageTitle.exists).ok()
    await t.useRole(Roles.thirdAccUser)
    await t.expect(ProductsPage.pageTitle.exists).ok()

})

*/