describe('Teste de Responsividade do Footer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve exibir o footer em coluna no viewport iphone-x', () => {
    cy.viewport('iphone-x');
    cy.get('[data-cy="footer-container"]')
      .should('have.css', 'flex-direction', 'column');
  });

  it('Deve exibir o footer em linha no viewport macbook-15', () => {
    cy.viewport('macbook-15');
    cy.get('[data-cy="footer-container"]')
      .should('have.css', 'flex-direction', 'row');
  });
});
