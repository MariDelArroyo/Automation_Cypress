describe('YouTube Search Test', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('URL'));
    });
  
    it('should search for the term in YouTube', () => {
      cy.get('#search-input').type(Cypress.env('Search'));
  
      cy.get('#search-icon-legacy').click();
  
      cy.get('ytd-video-renderer', { timeout: 10000 }).should('have.length.greaterThan', 0);
    });
  });
  