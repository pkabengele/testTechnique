import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import * as rentalResults from "../pageObjects/rentalResults";
import {waitResultLoaded} from "../pageObjects/homepage";
import * as homePage from "../pageObjects/homepage";

Then("I have results for {string}", (string) => {
    rentalResults.getBreadCrumb(string).should('exist')
    rentalResults.getResultCards().should('exist')
});
Then(/^all prices are as expected$/,  ()=>  {
    waitResultLoaded();
    homePage.getResultCardsPrices().each(($el) => {
        expect(parseFloat($el.text().replace(',','.').replace(/[^\d\.]*/g, ''))).lessThan(1500)
    })
});
Then(/^locations are as expected$/, function () {
    homePage.getResultCards().each(($el) => {
        expect($el.text()).contains('PARIS')
    })
});