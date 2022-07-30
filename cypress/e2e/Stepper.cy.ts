describe('First test', () => {
    it('passes', () => {
      cy.visit('http://localhost:4200/')
      cy.get('.sidebar-toggle').click()
      cy.get('[class="menu-title"]').contains("Layout").click()
      cy.get('[class="menu-title"]').contains("Stepper").click()
      cy.get('.sidebar-toggle').click()
      cy.get('[type="submit"]').contains("next").click()
  
     })
  })   