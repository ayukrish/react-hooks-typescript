describe('Location Page Test', () => {
  it('Visits the Episode Page', () => {
    cy.visit('http://localhost:3030/locations');
    cy.get('[data-xpath="locationWrapper"]').should('have.length', 1);
    cy.get('[data-xpath="cardWrapper"]').should('have.length', 20);
  });
});
