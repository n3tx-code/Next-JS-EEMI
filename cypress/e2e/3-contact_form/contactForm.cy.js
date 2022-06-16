/// <reference types="cypress" />

describe('Menu test', () => {
    it('Send a message', () => {
        cy.visit('http://localhost:3000/')
        cy.get("#email").type("teste2e@eemi.com")
        cy.get("#message").type("This is a test message")
        cy.get("button[type=submit]").click()
        cy.wait(1000) // time to submit the form
        cy.get(".contactFormSucess").should('have.text', 'Thanks for your submission!')
    })
})