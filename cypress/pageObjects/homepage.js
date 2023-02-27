export const getResearchBar = () => cy.get('app-research-bar')
export const getCookiesButton = () => cy.contains('button','Tout accepter')
export const getMaxPrice = () => cy.get(`[id="price"]`)
export const getCity = () => cy.get(`[id="city"]`)
export const getProjectToggle = () => cy.get(`[id="projectToggle"]`)
export const getSearchButton = () => cy.get(`[type="submit"]:contains('Rechercher')`)
export const getResultCards = () => cy.get('app-annonce-card')
export const getResultCardsPrices = () => cy.get(`app-annonce-card span:contains('€')`)
export const getEstimateRent = () => cy.get(`a:contains('Estimez votre loyer')`)
export const getProject = (project) => cy.get(`p-radiobutton:contains(${project})`)

export function waitResultLoaded(){
    getEstimateRent().should('not.exist')
}