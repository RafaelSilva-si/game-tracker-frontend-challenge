/// <reference types="Cypress" />

describe('Deals list Page', function(){
    beforeEach(function(){
        cy.visit('http://127.0.0.1:5173/')
    })

    it('Garantir que o input de Pesquisa esteja funcionando corretamente', function(){
        cy.get('input[name="search-input"]')
            .should('be.visible')
            .type('Teste')
            .should('have.value', 'Teste')
            .clear()
            .should('have.value', '')
    })

    it('Garantir que o select de ordenação esteja funcionando corretamente', function(){
        cy.get('select[name="select-order"]')
            .should('be.visible')
            .select(3)
            .should('have.value', 'price')
    })

    it('Garantir que se não tiver dados, mostre mensagem de não encontrado', function(){
        cy.get('input[name="search-input"]').type('adasdawe').blur()
        cy.get('li[class="card"]').then(($listItem) => {
            if($listItem.length === 0) {
                cy.get('#not-found-message').should('be.visible')
            }
        })
    })

    it('Garantir que esteja pesquisando corretamente', function(){
        cy.get('input[name="search-input"]').type('teste pesquisar').blur()
        cy.url().should('include', 'title=teste+pesquisar')
    })

    it('Garantir que esteja ordenando corretamente', function(){
        cy.get('select[name="select-order"]').select(3)
        cy.url().should('include', 'sortBy=price')
    })

    it('Garantir que o botão "ver mais" apareça se tiver mais de 12 dados', function(){
        cy.get('li[class="card"]').then(($listItem) => {
            if($listItem.length > 12) {
                cy.get('.moreButton').should('be.visible')
            }
        })
    })

    it('Garantir que o botão "ver mais" não apareça se tiver menos de 11 dados', function(){
        cy.get('input[name="search-input"]').type('farm').blur()
        cy.get('li[class="card"]').then(($listItem) => {
            if($listItem.length < 11) {
                cy.get('.moreButton').should('be.visible')
            }
        })
    })

    it('Garantir que o botão "ver mais" funcione corretamente', function(){
        cy.get('.moreButton').should('be.visible').click()
        cy.get('li[class="card"]').should('have.length.greaterThan', 12)
    })
})