import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import * as homePage from "../pageObjects/homepage";
import {waitResultLoaded} from "../pageObjects/homepage";

Given(/^I navigate to foncia home page$/, function () {
    cy.visit('https://fr.foncia.com/');
});
Then(/^the research bar is available$/, function () {
    homePage.getResearchBar().should('be.visible')
});
When(/^I accept cookies$/, function () {
    homePage.getCookiesButton().click()
});
Then(/^I can search an asset to rent$/, (datatable) => {
    homePage.getProjectToggle().click()
    homePage.getProject('Louer')
        .click()
        .find('input')
        .should('be.checked')
    homePage.getProjectToggle().click()
    datatable.hashes().forEach((element) => {
        homePage.getMaxPrice().type(element.maxPrice);
        homePage.getCity().type(element.city.split(' ')[0]);
        cy.get(`li:contains(${element.city})`).click()
    })
    homePage.getSearchButton()
        .click()
});
Then(/^I have results$/, function () {
    homePage.getResultCards().should('exist')
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