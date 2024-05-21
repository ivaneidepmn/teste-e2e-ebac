class CarrinhoPage {
    verificarProdutoAdicionado() {
        cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho');
    }

    procederParaCheckout() {
        cy.get('.checkout-button').click();
    }
}

export default new CarrinhoPage();
