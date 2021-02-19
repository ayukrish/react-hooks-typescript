describe('Tabs Test', () => {
  it('Change the mode', () => {
    cy.visit('http://localhost:3030/');

    // check for body color in light mode
    cy.get('body').should('have.css', 'background-color', 'rgb(22, 22, 29)');

    // click on theme toggler
    cy.get('[data-xpath="themeToggler"]').click();

    // check for body color in dark mode
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');
  });

  it('Redirect to Episodes page', () => {
    cy.visit('http://localhost:3030/');

    // click on  location link
    cy.get('[data-xpath="link_locations"]').click();

    // check if re-directs to location page
    cy.url().should('eq', 'http://localhost:3030/locations');
    cy.url().should('include', '/locations');
  });

  it('Redirect to Episodes page', () => {
    cy.visit('http://localhost:3030/');

    // click on  episode link
    cy.get('[data-xpath="link_episodes"]').click();

    // check if re-directs to episode page
    cy.url().should('eq', 'http://localhost:3030/episodes');
    cy.url().should('include', '/episodes');
  });
});
