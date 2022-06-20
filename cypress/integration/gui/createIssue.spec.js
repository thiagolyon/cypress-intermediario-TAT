/// <reference types="Cypress" />

const faker = require('faker')

describe('Create issue', () => {
   
    const issue = {
        title: `issue-${faker.random.uuid()}`,
        description: faker.random.words(5),
        project: {
            name: `project-${faker.random.uuid()}`,
            description: faker.random.words(5)
        }
    }

    before(() => {
        cy.login()
        cy.api_createProject(issue.project)
    })

    it('Criação de issue com sucesso', () => {
        cy.gui_createIssue(issue)

        cy.get('.issue-details').should('contain', issue.title).and('contain', issue.description)
    })
})