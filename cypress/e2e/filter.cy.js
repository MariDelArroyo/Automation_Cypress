describe('YouTube Search Test', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('URL'));
    });
  
    it('should search for the term in YouTube and apply This Week filter', () => {
      cy.get('#search-input').type(Cypress.env('Search'));
      cy.get('#search-icon-legacy').click();

      // Esperar a que los resultados de la búsqueda estén visibles
      cy.get('ytd-video-renderer', { timeout: 10000 }).should('have.length.greaterThan', 0);
      
      // Abre el menú de filtros
      cy.get('#filter-button').click();  // Utiliza el ID específico del botón de filtros
      
      // Selecciona el filtro 'Esta semana' ajustado para el idioma español
      cy.get('a#endpoint').contains('Esta semana').click();  // Buscar el enlace con ID 'endpoint' que contenga el texto 'Esta semana'

      // Verificar que el filtro se aplicó correctamente esperando a que se recarguen los resultados
      cy.get('ytd-video-renderer', { timeout: 10000 }).should('have.length.greaterThan', 0);
    });
});
