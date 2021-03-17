import {Selector} from 'testcafe'

class CartPage{
    constructor(){
        this.pageTitle = Selector('.subheader')
        this.continueShoppingBtn = Selector('.btn_secondary')
        this.checkoutBtn = Selector('a.btn_action.checkout_button')
    }
}

export default new CartPage()