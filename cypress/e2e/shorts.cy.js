describe('YouTube Search and Shorts Filter Test', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('URL'));
    });
  
    it('should search for the term in YouTube and filter Shorts', () => {
      cy.get('#search-input').type(Cypress.env('Search'));
  
      cy.get('#search-icon-legacy').click();
  
      cy.get('ytd-video-renderer').should('have.length.greaterThan', 0);
  
      cy.get('yt-chip-cloud-chip-renderer:contains("Shorts")').click();
  
      cy.get('ytd-video-renderer').should('not.exist');
      cy.get('ytd-reel-item-renderer', ).should('have.length.greaterThan', 0);
    });
  });
  