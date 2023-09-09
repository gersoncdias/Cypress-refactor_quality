describe('Teste Automação API Produtos', () => {
  let responseBody;

  it('Deve verificar a resposta da API para o produto com id 1', () => {
    cy.getProductsList().then((response) => {
      expect(response.status).to.eq(200);
      responseBody = JSON.parse(response.body);
      if (responseBody.products && responseBody.products.length > 0) {
        const productWithId1 = responseBody.products.find((product) => product.id === 1);
        expect(productWithId1).to.not.be.undefined;
        expect(productWithId1.name).to.eq("Blue Top");
        expect(productWithId1.price).to.eq("Rs. 500");
        expect(productWithId1.brand).to.eq("Polo");

        const expectedNumberOfProducts = 34;
        const actualNumberOfProducts = responseBody.products.length;
        expect(actualNumberOfProducts).to.eq(expectedNumberOfProducts);
      } 
    });
  });
});


