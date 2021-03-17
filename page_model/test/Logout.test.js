import LoginPage from '../pages/LoginPage'
import MenuPage from '../pages/MenuPage'
import ProductsPage from '../pages/ProductsPage'
import {CREDENTIALS} from '../data/Constants'

fixture ('Logout feature testing')
 .page `https://www.saucedemo.com/`

 test('Logout from products page', async t => {
     await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
     await t.click(ProductsPage.menuIcon)
     await t.click(MenuPage.logoutButton)
     await t.expect(LoginPage.usernameField.exists).ok()
     await t.expect(LoginPage.usernameField.exists).ok()
     await t.expect(LoginPage.loginButton.exists).ok()
 })