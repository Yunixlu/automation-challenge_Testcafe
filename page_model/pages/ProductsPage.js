import {Selector, t} from 'testcafe'

class ProductsPage{
    constructor(){
        this.pageTitle = Selector('.product_label')
        this.menuIcon = Selector('#react-burger-menu-btn')
        this.cartIcon = Selector('#shopping_cart_container')
        this.itemAdded = Selector('#shopping_cart_container>a>span')
        this.inventoryItem = Selector('.inventory_item')

        this.productLabel = Selector('.inventory_item').nth(0).child('.inventory_item_label').child('a').child('.inventory_item_name')
        this.addCartButton = Selector('.inventory_item').nth(0).child('.pricebar').child('.btn_inventory')

        this.productLabels = []
        this.addCartButtons = []
        this.productNames = []

        for (let index = 0; index <= 5; index++) {
            this.addCartButtons.push(Selector('.inventory_item').nth(index).child('.pricebar').child('.btn_inventory'))
            this.productLabels.push(Selector('.inventory_item').nth(index).child('.inventory_item_label').child('a').child('.inventory_item_name'))
        }
    }

    async addItemsToCart(){
        for (var index = 0; index <= 5; index++) {
            this.productNames[index] = await this.productLabels[index].innerText
            await t.click(this.addCartButtons[index]) 
        }
    }
}

export default new ProductsPage()