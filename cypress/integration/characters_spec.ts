describe('Character Page Test', () => {
  it('Visits the Character Page', () => {
    cy.visit('http://localhost:3030/');
  });

  it('Change the mode', () => {
    cy.visit('http://localhost:3030/');
    cy.get('[data-xpath="themeToggler"]').click();
  });
});
