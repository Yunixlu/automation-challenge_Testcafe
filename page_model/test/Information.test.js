import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import InformationPage from '../pages/InformationPage'
import OverviewPage from '../pages/OverviewPage'
import {CREDENTIALS, INFORMATION} from '../data/Constants'

fixture ('Navigates to Your Information Page')
 .page `https://www.saucedemo.com/`


 test('Continue with missing mail information', async t =>{
   
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.addItemsToCart()
    await t.expect(ProductsPage.itemAdded.innerText).contains('6')
    await t.click(ProductsPage.cartIcon)
    await t.click(CartPage.checkoutBtn)
    await t.expect(InformationPage.pageTitle.exists).ok()
    await t.click(InformationPage.continueBtn)
    await t.expect(InformationPage.errorMessage.innerText).eql(INFORMATION.ERROR_MESSAGE.FIRSTNAMEREQUIRED)
    await t.typeText(InformationPage.firstNameField, INFORMATION.USER_INFORMATION.FIRSTNAME)
    await t.click(InformationPage.continueBtn)
    await t.expect(InformationPage.errorMessage.innerText).eql(INFORMATION.ERROR_MESSAGE.LASTNAMEREQUIRED)
    await t.typeText(InformationPage.lastNameField, INFORMATION.USER_INFORMATION.LASTNAME)
    await t.click(InformationPage.continueBtn)
    await t.expect(InformationPage.errorMessage.innerText).eql(INFORMATION.ERROR_MESSAGE.ZIPCODEREQUIRED)
 })

 test('Fill user information', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.addItemsToCart()
    await t.expect(ProductsPage.itemAdded.innerText).contains('6')
    await t.click(ProductsPage.cartIcon)
    await t.click(CartPage.checkoutBtn)
    await t.expect(InformationPage.pageTitle.exists).ok()
    await t.typeText(InformationPage.firstNameField, INFORMATION.USER_INFORMATION.FIRSTNAME)
    await t.typeText(InformationPage.lastNameField, INFORMATION.USER_INFORMATION.LASTNAME)
    await t.typeText(InformationPage.zipCodeField, INFORMATION.USER_INFORMATION.ZIPCODE)
    await t.click(InformationPage.continueBtn)
    await t.expect(OverviewPage.pageTitle.exists).ok()
    await t.expect(OverviewPage.pageTitle.innerText).eql('Checkout: Overview')
 })
