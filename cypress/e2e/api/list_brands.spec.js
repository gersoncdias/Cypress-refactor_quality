describe('Teste Automação API Marcas', () => {
  let responseBody;

  it('Deve verificar a resposta da API para marcas específicas', () => {
    cy.getBrandsList().then((response) => {
      expect(response.status).to.eq(200);
      responseBody = JSON.parse(response.body);
       expect(responseBody.brands).to.have.length.above(0);
      const brands = responseBody.brands;
      const brandNames = brands.map((brand) => brand.brand);
      expect(brandNames).to.include('Polo');
      expect(brandNames).to.include('Mast & Harbour');
    });
  });
});