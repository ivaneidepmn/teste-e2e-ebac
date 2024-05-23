class CarrinhoPage {
    verificarProdutoAdicionado() {
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho');
    }

    procederParaCheckout() {
        cy.get('.checkout-button').click();
    }
}

export default CarrinhoPage;
