describe('Teste de Responsividade da Navbar', () => {
  beforeEach(() => {
    // Antes de cada teste, visita a página local do projeto Next.js
    cy.visit('http://localhost:3000');
    // Pausa inicial de 1 segundo para a turma ver a página recém-carregada
    cy.wait(1000);
  });

  it('Deve exibir o menu de navegação completo no Desktop', () => {
    // Simula a tela de um Macbook de 15 polegadas
    cy.viewport('macbook-15');
    // Pausa de 2 segundos para os alunos observarem o layout de desktop
    cy.wait(2000);
    // O menu desktop deve estar visível e o botão mobile invisível
    cy.get('[data-cy="desktop-menu"]').should('be.visible');
    cy.get('[data-cy="mobile-menu-btn"]').should('not.be.visible');
  });

  it('Deve exibir o botão hambúrguer no Mobile e abrir o menu ao clicar', () => {
    // Simula a tela de um iPhone X
    cy.viewport('iphone-x');
    // Pausa de 2 segundos para a turma perceber o redimensionamento da janela
    cy.wait(2000);
    // O menu desktop deve sumir e dar lugar ao botão
    cy.get('[data-cy="desktop-menu"]').should('not.be.visible');
    cy.get('[data-cy="mobile-menu-btn"]').should('be.visible');
    cy.get('[data-cy="mobile-menu"]').should('not.exist');
    // Pausa rápida de 1 segundo de "suspense" antes do clique
    cy.wait(1000);
    cy.get('[data-cy="mobile-menu-btn"]').click();
    // Pausa final de 2 segundos para eles verem o menu dropdown aberto
    cy.wait(2000);
    cy.get('[data-cy="mobile-menu"]').should('be.visible');
  });
});