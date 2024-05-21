/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente
        Quero acessar a Loja EBAC
        Para fazer um pedido de 4 produtos
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        // Primeiro produto: Ingrid Running Jacket
        cy.get('.products .product').eq(0).click();
        cy.get('.button-variable-item-Orange').click();
        cy.get('.button-variable-item-M').click();
        cy.get('.input-text').clear().type('2');
        cy.get('.single_add_to_cart_button').click();
        cy.wait(2000); // Espera pelo processamento do pedido

        // Segundo produto: Augusta Pullover Jacket
        cy.visit('/'); // Volta para a página inicial
        cy.get('.products .product').eq(1).click(); // Seleciona o produto
        cy.get('.button-variable-item-Red').click(); // Seleciona a cor
        cy.get('.button-variable-item-L').click(); // Seleciona o tamanho
        cy.get('.input-text').clear().type('2'); // Define a quantidade
        cy.get('.single_add_to_cart_button').click(); // Adiciona ao carrinho
        cy.wait(2000); // Espera pelo processamento do pedido

        // Terceiro produto: Josie Yoga Jacket
        cy.visit('/'); // Volta para a página inicial
        cy.get('.products .product').eq(2).click(); // Seleciona o produto
        cy.get('.button-variable-item-Gray').click(); // Seleciona a cor
        cy.get('.button-variable-item-S').click(); // Seleciona o tamanho
        cy.get('.input-text').clear().type('3'); // Define a quantidade
        cy.get('.single_add_to_cart_button').click(); // Adiciona ao carrinho
        cy.wait(2000); // Espera pelo processamento do pedido

        // Quarto produto: Circe Hooded Ice Fleece
        cy.visit('/'); // Volta para a página inicial
        cy.get('.products .product').eq(4).click();
        cy.get('.button-variable-item-Green').click(); // Seleciona a cor
        cy.get('.button-variable-item-XL').click(); // Seleciona o tamanho
        cy.get('.input-text').clear().type('4'); // Define a quantidade
        cy.get('.single_add_to_cart_button').click(); // Adiciona ao carrinho
        cy.wait(2000); // Espera pelo processamento do pedido

        // Avançar para o checkout
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click(); // Clica para ir para o carrinho
        cy.get('.checkout').should('be.visible').first().click(); // Garante que o botão está visível e clica no primeiro botão "checkout"

        // Preenchendo os detalhes de cobrança
        cy.get('#billing_first_name').type('Fernanda'); // Preenche o primeiro nome
        cy.get('#billing_last_name').type('Nascimento'); // Preenche o segundo nome
        cy.get('#billing_company').type('FKModas'); // Preenche o nome da empresa
        cy.get('#billing_country').select('BR', { force: true }); // Seleciona o país
        cy.get('#billing_address_1').type('Passagem São José n° 821'); // Preenche o endereço
        cy.get('#billing_address_2').type('Casa A'); // Preenche o complemento do endereço
        cy.get('#billing_city').type('Belém'); // Preenche a cidade
        cy.get('#billing_state').select('PA'); // Seleciona o estado
        cy.get('#billing_postcode').type('66811520'); // Preenche o CEP
        cy.get('#billing_phone').type('91984855912'); // Preenche o telefone
        cy.get('#billing_email').type('fernandak@gmail.com'); // Preenche o email

        // Seleciona o método de pagamento
        cy.get('#payment_method_cod').check(); // Seleciona pagamento na entrega

        // Aceita os termos e condições
        cy.get('#terms').check(); // Aceita os termos e condições

        // Finaliza a compra
        cy.get('#place_order').click(); // Clica em "Place order"

        // Verificar se a compra foi finalizada com sucesso
        cy.contains('Obrigado. Seu pedido foi recebido.').should('be.visible'); // Verifica a mensagem de confirmação
    });
});
