import {Selector} from 'testcafe'

class InformationPage{
    constructor(){
        this.pageTitle = Selector('.subheader')
        this.continueBtn = Selector('.btn_primary')
        this.errorMessage = Selector('h3,error')
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.zipCodeField = Selector('#postal-code')
    }
}

export default new InformationPage()