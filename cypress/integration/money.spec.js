/// <reference types="Cypress" />

context('Assertions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    describe('Assert entered number value', () => {
      it('Should make an assertion about the entered whole', () => {
          cy.get('#cypress-money')
            .type('1600').should('have.value', '1600')
          cy.get('#cypress-label-new-format')
            .should('have.text', '1 600.00')
      })
      it('Should make an assertion about the entered number with decimals', () => {
        cy.get('#cypress-money')
          .type('1600000.116').should('have.value', '1600000.116')
        cy.get('#cypress-label-new-format')
          .should('have.text', '1 600 000.12')
      })
      it('Should not allowed alpha characters', () => {
        cy.get('#cypress-money')
          .type('test').should('have.value', '')
        cy.get('#cypress-label-new-format')
          .should('have.text', '')
      })
      it('Should not allowed special characters', () => {
        cy.get('#cypress-money')
          .type('@$%').should('have.value', '')
        cy.get('#cypress-label-new-format')
          .should('have.text', '')
      })       
    })
})