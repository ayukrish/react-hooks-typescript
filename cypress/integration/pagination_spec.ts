describe('Tabs Test', () => {
  it('Change the mode', () => {
    cy.visit('http://localhost:3030/');

    // check prev page btn is disabled
    // and next page button is not disabled
    cy.get('[data-xpath="pagination_prevBtn"]').should('be.disabled');
    cy.get('[data-xpath="pagination_nextBtn"]').should('not.be.disabled');

    // click on next page button
    cy.get('[data-xpath="pagination_nextBtn"]').click();

    // check prev page btn is not disabled after click on next button
    cy.get('[data-xpath="pagination_prevBtn"]').should('not.be.disabled');
  });
});
