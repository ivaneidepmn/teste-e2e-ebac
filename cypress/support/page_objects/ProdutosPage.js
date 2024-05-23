class ProdutosPage {
    selecionarProduto(index) {
        cy.get('.products .product').eq(index).should('be.visible').click();
    }

    selecionarVariacao(cor, tamanho) {
        cy.get(`.button-variable-item-${cor}`).click();
        cy.get(`.button-variable-item-${tamanho}`).click();
    }

    definirQuantidade(quantidade) {
        cy.get('.input-text').clear().type(quantidade);
    }

    adicionarAoCarrinho() {
        cy.get('.single_add_to_cart_button').click();
    }
}

export default ProdutosPage;
