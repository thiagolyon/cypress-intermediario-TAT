/// <reference types="Cypress" />

describe('Login', () => {

    it('Teste de sucesso', () => {
        cy.login()

        cy.get('.qa-user-avatar').should('exist')
    })
})