Cypress.Commands.add('getById', (id) => {
  return cy.get(`[data-cy="${id}"]`);
});
