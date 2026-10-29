describe('Teste de Responsividade - Flexbox', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.wait(1000);
  });

  it('Deve exibir os produtos empilhados (Coluna) no Mobile', () => {
    cy.viewport('iphone-x');
    cy.wait(2000);
    // VERIFICA O REAL DE LAYOUT: O container deve estar com flex-direction: column
    cy.get('[data-cy="container-produtos"]')
      .should('have.css', 'flex-direction', 'column');
    // E os produtos devem estar na tela
    cy.get('[data-cy="produto-1"]').should('be.visible');
    cy.get('[data-cy="produto-2"]').should('be.visible');
    cy.get('[data-cy="produto-3"]').should('be.visible');
  });

  it('Deve exibir os produtos lado a lado (Linha) no Desktop', () => {
    cy.viewport('macbook-15');
    cy.wait(2000);
    // VERIFICA O REAL DE LAYOUT: O container deve estar com flex-direction: row
    cy.get('[data-cy="container-produtos"]')
      .should('have.css', 'flex-direction', 'row');
    // E os produtos devem estar na tela
    cy.get('[data-cy="produto-1"]').should('be.visible');
    cy.get('[data-cy="produto-2"]').should('be.visible');
    cy.get('[data-cy="produto-3"]').should('be.visible');
  });
});