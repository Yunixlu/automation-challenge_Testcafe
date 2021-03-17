import {Selector} from 'testcafe'

class FinishPage{
    constructor(){
        this.pageTitle = Selector('.subheader')
        this.message = Selector('h2.complete-header')
    }
}

export default new FinishPage()