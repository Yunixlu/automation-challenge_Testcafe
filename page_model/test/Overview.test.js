import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import InformationPage from '../pages/InformationPage'
import OverviewPage from '../pages/OverviewPage'
import {CREDENTIALS, INFORMATION} from '../data/Constants'
import FinishPage from '../pages/FinishPage'

fixture ('Navigates on Overview Page')
 .page `https://www.saucedemo.com/`

 test('Final order items', async t => {
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
   for (let index = 0; index <= 5; index++) {
      await t.expect(OverviewPage.productLabels[index].innerText).eql(ProductsPage.productNames[index])
   }
   
 })

 
 test('Complete a purchase', async t => {
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
    for (let index = 0; index <= 5; index++) {
      await t.expect(OverviewPage.productLabels[index].innerText).eql(ProductsPage.productNames[index])
   }
    await t.click(OverviewPage.finishBtn)
    await t.expect(FinishPage.pageTitle.exists).ok()
    await t.expect(FinishPage.pageTitle.innerText).eql('Finish')
    await t.expect(FinishPage.message.innerText).eql('THANK YOU FOR YOUR ORDER')
 })

