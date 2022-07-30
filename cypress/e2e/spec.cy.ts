describe('First test', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
    cy.get('.sidebar-toggle').click()
  })
}) 