/// <reference types="cypress" />

describe('Menu test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('check every links of the menu work', () => {
        // home
        cy.get(".navBarLink").first().click()
        cy.get('.markDownContentWrapper h1').first().should('have.text', 'Netx Js Top 25 popular movies of the moment')

        // movies 
        cy.get(".navBarLink").eq(1).click()
        cy.get('h1').should('have.text', 'Movies')

        // licence 
        cy.get(".navBarLink").eq(2).click()
        cy.get('h1').should('have.text', 'Licence')

    })

    it('responsive menu', () => {
        cy.get(".navMenu ").should('be.visible');
        cy.viewport('iphone-6')
        cy.get(".navMenu ").should('not.be.visible');
        cy.get(".navMobileButton").click()
        cy.get(".navMenu").should('have.class', 'navMenuActive')
        cy.get(".navBarLink").eq(1).click()
        cy.get('h1').should('have.text', 'Movies')
    })
})
