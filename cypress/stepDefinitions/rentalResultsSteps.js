import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import * as rentalResults from "../pageObjects/rentalResults";
import {waitResultLoaded} from "../pageObjects/homepage";

Then("I have results for {string}", (string) => {
    rentalResults.getBreadCrumb(string).should('exist')
    rentalResults.getResultCards().should('exist')
});
Then("all prices are under {int}", (value) => {
    rentalResults.getResultCardsPrices().each(($el) => {
        expect(parseFloat($el.text().replace(',', '.').replace(/[^\d\.]*/g, ''))).lessThan(value)
    })
});
Then("locations contain {string}", (value) => {
    rentalResults.getResultCards().each(($el) => {
        expect($el.text()).contains(value)
    })
});