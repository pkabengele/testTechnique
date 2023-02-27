
export const getResultCards = () => cy.get('app-annonce-card')
export const getResultCardsPrices = () => cy.get(`app-annonce-card span:contains('€')`)
export const getEstimateRent = () => cy.get(`a:contains('Estimez votre loyer')`)

export const getBreadCrumb = (node) => cy.get(`p-breadcrumb li:contains(${node})`)

export function waitResultLoaded(){
    getEstimateRent().should('not.exist')
}