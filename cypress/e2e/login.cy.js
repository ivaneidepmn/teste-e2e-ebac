/// <reference types="cypress" />
let dadosLogin

context('Funcionalidade Login', () => {
    before(() => {
        cy.fixture('perfil').then(perfil => {
            dadosLogin = perfil
        })
    });

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Login com sucesso usando Comando customizado', () => {
        cy.login(dadosLogin.usuario, dadosLogin.senha)
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it('Login usando fixture', () => {
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
        cy.get('.page-title').should('contain', 'Minha conta')
    });
git
git
    cy.visit('/my-account');
    cy.get('#username').type(dadosLogin.usuario);
    cy.get('#password').type(dadosLogin.senha, { log: false });
    cy.get('.woocommerce-form > .button').click();
    cy.url().should('include', '/my-account');
    cy.get('.page-title').should('contain', 'Minha conta');
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').contains('Olá, ivapmn (não é ivapmn? Sair)');
});    
});
    
    
    
    
    
    
    
    
