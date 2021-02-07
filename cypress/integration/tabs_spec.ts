describe('Tabs Test', () => {
  it('Change the mode', () => {
    cy.visit('http://localhost:3030/');
    cy.get('body').should('have.css', 'background-color', 'rgb(22, 22, 29)');
    cy.get('[data-xpath="themeToggler"]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');
  });

  it('Redirect to Episodes page', () => {
    cy.visit('http://localhost:3030/');
    cy.get('[data-xpath="link_locations"]').click();
    cy.url().should('eq', 'http://localhost:3030/locations');
    cy.url().should('include', '/locations');
  });

  it('Redirect to Episodes page', () => {
    cy.visit('http://localhost:3030/');
    cy.get('[data-xpath="link_episodes"]').click();
    cy.url().should('eq', 'http://localhost:3030/episodes');
    cy.url().should('include', '/episodes');
  });
});
