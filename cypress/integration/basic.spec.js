///<reference types="cypress"/>

describe('Cypress basics', () => {
    it.only ('Should visit a page and assert title', ()=> {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //const title = cy.title()
        //console.log(title)

        cy.pause()

        cy.title().should('be.equal', 'Campo de Treinamento').debug()

        cy.title().should('contain', 'Campo de Treinamento')

        cy.title()   
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo de Treinamento')

        //TODO imprimir o log no console
        //TODO escrever o titulo em um campo de texto
    })

    it ('Should find and interact with an element', ()=> {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})