describe('starter-kit', () => {
  let url;
  let selector;

  before(() => {
    cy.fixture('starter-kit').then((starterKit) => {
      ({ url, selector } = starterKit);

      cy.visit(url);
    });
  });

  describe('when Big Ten conference is selected', () => {
    before(() => {
      cy.get(selector.conference.bigTen).click();
    });

    it('highlights Big Ten conference', () => {
      cy.get(selector.conference.bigTen).should('have.css', 'background-color', 'rgb(241, 245, 248)');
    });

    it('displays Ohio State institution', () => {
      cy.get(selector.institution.ohioState).should('be.visible');
      cy.get(selector.institution.ohioState).should('contain', 'Ohio State');
    });
  });
});
