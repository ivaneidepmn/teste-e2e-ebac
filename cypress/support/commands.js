Cypress.Commands.add('login', (usuario, senha) => {
    cy.visit('minha-conta');
    cy.get('#username').type(usuario);
    cy.get('#password').type(senha, { log: false });
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-MyAccount-navigation').should('be.visible');
});

Cypress.Commands.add('comprar', (indiceProduto, cor, tamanho, quantidade) => {
    cy.visit('/produtos');
    cy.get('.products .product').eq(indiceProduto).click();
    cy.get(`.button-variable-item-${tamanho}`).click();
    cy.get(`.button-variable-item-${cor}`).click();
    cy.get('.quantity input').clear().type(quantidade);
    cy.get('.single_add_to_cart_button').click();
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho');
});

Cypress.Commands.add('checkout', (primeiroNome, ultimoNome, pais, endereco, numeroEndereco, cidade, estado, cep, telefone, email) => {
    cy.get('.woocommerce-message > .button').click();
    cy.get('.checkout-button');

});