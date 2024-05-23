Cypress.Commands.add('login', (usuario, senha) => {
    cy.visit('minha-conta');
    cy.get('#username').type(usuario);
    cy.get('#password').type(senha, { log: false });
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-MyAccount-navigation').should('be.visible');
});

Cypress.Commands.add('fazerPedido', (indiceProdutos, cor, tamanho, quantidade) => {
        ProdutosPage.selecionarProduto(indiceProdutos);
        ProdutosPage.selecionarVariacao(cor, tamanho);
        ProdutosPage.definirQuantidade(quantidade);
        ProdutosPage.adicionarAoCarrinho();
        CarrinhoPage.verificarProdutoAdicionado();
});

Cypress.Commands.add('irParaCheckout', () => {
    CarrinhoPage.procederParaCheckout();
});

Cypress.Commands.add('preencherCheckout', (primeiroNome, ultimoNome, pais, endereco, numeroEndereco, cidade, estado, cep, telefone, email) => {
    CheckoutPage.preencherDetalhes(primeiroNome, ultimoNome, pais, endereco, numeroEndereco, cidade, estado, cep, telefone, email);
    CheckoutPage.finalizarCompra();
});

Cypress.Commands.add('verificarCompraFinalizada', () => {
    CheckoutPage.verificarCompraFinalizada();
});
