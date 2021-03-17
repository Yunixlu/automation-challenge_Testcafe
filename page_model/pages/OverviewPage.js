import {Selector} from 'testcafe'

class OverviewPage{
    constructor(){
        this.pageTitle = Selector('.subheader')
        this.product1 = Selector('#item_4_title_link>div')
        this.product2 = Selector('#item_0_title_link>div')
        this.product3 = Selector('#item_1_title_link>div')
        this.finishBtn = Selector('a.btn_action.cart_button')
        this.productLabels = []
        
        for (let index = 0; index <= 5; index++) {
           this.productLabels.push(Selector('.cart_item').nth(index).child('.cart_item_label').child('a').child('.inventory_item_name'))   
        }
    }
}

export default new OverviewPage()