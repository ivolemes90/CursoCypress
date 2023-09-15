/// <reference types="cypress" />

it('A external test...', () => {
    
})

describe('Should group tests...', ()=>{

    describe('Should group more specific tests...', ()=>{

        it.skip('A ixternal test...', () => {
    
        })

    })

    describe('Should group should more specific tests 2...', ()=>{
        it('A internal test...', () => {
    
        })
        
    })
    
    it('A internal test...', () => {
    
    })

})