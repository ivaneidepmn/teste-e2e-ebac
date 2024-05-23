/// <reference types="cypress" />

import ProdutosPage from '../support/page_objects/ProdutosPage';
import CarrinhoPage from '../support/page_objects/CarrinhoPage';
import CheckoutPage from '../support/page_objects/CheckoutPage';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.wait(2000); // Espera de 2 segundos para garantir que a página tenha carregado completamente
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.fixture('produtos').then((data) => {
            data.produtos.forEach((produto) => {
                cy.fazerPedido(produto.index, produto.cor, produto.tamanho, produto.quantidade);
            });
        });

        // Avançar para o checkout
        cy.irParaCheckout();

        // Preencher os detalhes de cobrança e finalizar a compra
        cy.preencherCheckout('Fernanda', 'Nascimento', 'BR', 'Passagem São José n° 821', 'Casa A', 'Belém', 'PA', '66811-520', '91984855912', 'fernandak@gmail.com');

        // Verificar se a compra foi finalizada com sucesso
        cy.verificarCompraFinalizada();
    });
});
