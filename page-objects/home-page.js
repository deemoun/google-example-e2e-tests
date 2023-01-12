import { Selector, t } from 'testcafe';

class homePage {
    constructor(){
        this.googleSearchButton = Selector('.FPdoLc > center:nth-child(1) > input:nth-child(1)'),
        this.googleSearchField = Selector('.gLFyf');
    }

    async pressGoogleSearchButton(){
        await t
        .click(this.googleSearchButton);
    }

    async typeSearchTerm(searchTerm){
        await t
        .typeText(this.googleSearchField, searchTerm);
    }
}

export default new homePage();