class CheckoutPage {
    preencherDetalhes(primeiroNome, ultimoNome, pais, endereco, numeroEndereco, cidade, estado, cep, telefone, email) {
        cy.get('#billing_first_name').type(primeiroNome);
        cy.get('#billing_last_name').type(ultimoNome);
        cy.get('#billing_country').select(pais);
        cy.get('#billing_address_1').type(endereco);
        cy.get('#billing_address_2').type(numeroEndereco);
        cy.get('#billing_city').type(cidade);
        cy.get('#billing_state').select(estado);
        cy.get('#billing_postcode').type(cep);
        cy.get('#billing_phone').type(telefone);
        cy.get('#billing_email').type(email);
    }

    finalizarCompra() {
        cy.get('#place_order').click();
    }

    verificarCompraFinalizada() {
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.');
    }
}

export default CheckoutPage;
