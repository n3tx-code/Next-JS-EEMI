/// <reference types="cypress" />

describe('Menu test', () => {
    it('try markdown link', () => {
        cy.visit('http://localhost:3000/')
        cy.get(".markDownContentWrapper > div:nth-child(1) > p:nth-child(4) > a").first().click()
        cy.wait(3000) // cause error if not wait. The page seems not fully load and raise an error.
        cy.url().should('include', '/movies')
        cy.get('h1').should('have.text', 'Movies')
    })

    it('Check licence content', () => {
        cy.visit('http://localhost:3000/licence')
        cy.get(".markDownContentWrapper p").eq(0).should('have.text', "The MIT License (MIT)")
        cy.get(".markDownContentWrapper p").eq(1).should('have.text', "Copyright (c) 2022 Nils VÆDE.")
        cy.get(".markDownContentWrapper p").eq(2).should('have.text', "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:")
        cy.get(".markDownContentWrapper p").eq(3).should('have.text', "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.")
        cy.get(".markDownContentWrapper p").eq(4).should('have.text', "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.")
    })
})
