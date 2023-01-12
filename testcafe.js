// Run the tests in Firefox Headless: testcafe firefox:headless testcafe.js -e
// Run the tests in Chrome Headless: testcafe chrome:headless testcafe.js -e
// Run the tests in Safari Headless: testcafe safari:headless testcafe.js -e
// Run 3 tests in Parallel Head: testcafe firefox testcafe.js -c 3 -e

// All URLs to test are in test-urls.js
// Environmnet variables are in test-env.js
// Test Data is defined in test-data.js

import {test_urls} from './test-urls';
import { baseURL } from './test-env';
import homePage from './page-objects/home-page';

const { size } = require("lodash");
const { Selector } = require("testcafe");


function verifyAllLinks(url_iteration, check_for_404){
    for (let i = 0; i < size(url_iteration); i++)
    {
        test(url_iteration[i], async t => {
            await t.navigateTo(baseURL + url_iteration[i]);
            if (check_for_404 == 0){
            } else {
                await checkNoPageNotFound(t);
            }
        });
    }
}

function checkNoPageNotFound(t){
    return t.expect(Selector('html').textContent).notContains('Page not found');
}

fixture`Verify Links`
    verifyAllLinks(test_urls, 1);

fixture`Verify WebSite:`
    .page(baseURL);

test('Verify pressing Google Button', async t => {
    
    await homePage.typeSearchTerm('Nomadic Dmitry'),
    await t.pressKey('enter')
    //await homePage.pressGoogleSearchButton();
});