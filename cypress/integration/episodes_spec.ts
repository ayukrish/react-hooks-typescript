describe('Episodes Page Test', () => {
  it('Visits the Episode Page', () => {
    cy.visit('http://localhost:3030/episodes');
    cy.get('[data-xpath="episodeWrapper"]').should('have.length', 1);
    cy.get('[data-xpath="cardWrapper"]').should('have.length', 20);
  });
});
