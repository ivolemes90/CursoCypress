///<reference types="cypress"/>

describe ('Work with dinamics tests', ()=> {
    beforeEach(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    const foods = ['carne', 'frango', 'pizza', 'vegetariano']

    foods.forEach(food => {
        it(`Cadastro com comida (${food})`, () => {
            cy.get('#formNome').type('Usuario')
            cy.get('#formSobrenome').type('Qualquer')
            cy.get(`[name=formSexo][value=F]`).click()
            cy.get(`[name=formComidaFavorita][value=${food}]`).click()
            cy.get('#formEscolaridade').select('Doutorado')
            cy.get('#formEsportes').select('Corrida')
    
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
    
        })
    })

    it.only('Deve selecionar todos utilizando o each', () => {
        cy.get('#formNome').type('Usuario')
        cy.get('#formSobrenome').type('Qualquer')
        cy.get(`[name=formSexo][value=F]`).click()

        //cy.get(`[name=formComidaFavorita]`).click({ multiple: true})
        cy.get(`[name=formComidaFavorita]`).each($el => {
            //$el.click()
            if ($el.val() != 'vegetariano')
                cy.wrap($el).click()
        })

        cy.get('#formEscolaridade').select('Doutorado')
        cy.get('#formEsportes').select('Corrida')

        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        //cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')
    })
})