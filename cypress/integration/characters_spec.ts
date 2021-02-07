describe('Character Page Test', () => {
  it('Visits the Character Page', () => {
    cy.visit('http://localhost:3030/');
    cy.get('[data-xpath="characterWrapper"]').should('have.length', 1);
    cy.get('[data-xpath="cardWrapper"]').should('have.length', 20);
  });
});
