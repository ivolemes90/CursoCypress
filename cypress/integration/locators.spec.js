///<reference types="cypress"/>

describe ('Work with locators', ()=> {
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=> {
        cy.reload()
    })

    it('using jquery selector', ()=> {
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        cy.get('table#tabelaUsuarios tbody>tr:nth-child(1) td:nth-child(3)>input').click()
        cy.get('[onclick*=\'Francisco\']').click()
        //ou
        cy.get("[onclick*='Francisco']").click()
        cy.get("#tabelaUsuarios td:contains('Doutorado'):eq(0)~ td:eq(3)>input")
        cy.get("#tabelaUsuarios tr:contains('Doutorado'):eq(0) td:eq(6)>input")
    })

})