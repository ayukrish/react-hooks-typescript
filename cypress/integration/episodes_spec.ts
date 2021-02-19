describe('Episodes Page Test', () => {
  it('Visits the Episode Page', () => {
    cy.visit('http://localhost:3030/episodes');

    // check for episodeWrapper
    cy.get('[data-xpath="episodeWrapper"]').should('have.length', 1);

    // check for cardWrapper
    cy.get('[data-xpath="cardWrapper"]').should('have.length', 20);
  });
});
