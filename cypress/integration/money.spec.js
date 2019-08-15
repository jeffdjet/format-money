/// <reference types="Cypress" />

context('Assertions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    describe('Assert entered number value', () => {
        it('.should() - make an assertion about the entered number', () => {
          cy.get('#cypress-money')
              .type('1600').should('have.value', '1600')
      })
    })
})