import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import {CREDENTIALS} from '../data/Constants'
import CartPage from '../pages/CartPage'

fixture ('Navigates to the Products Page')
 .page `https://www.saucedemo.com/`

 test('Navigate to the shopping cart', async t => {
     await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
     await t.click(ProductsPage.cartIcon)
     await t.expect(CartPage.pageTitle.exists).ok()
 })


 test('Add a single item to the shopping cart', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.addCartButton)
    await t.expect(ProductsPage.itemAdded.innerText).contains('1')
 })

 
 test('Add multiple items to the shopping cart', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.addItemsToCart()
    await t.expect(ProductsPage.itemAdded.innerText).contains('6')
 })

