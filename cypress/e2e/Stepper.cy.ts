describe('First test', () => {
    it('passes', () => {
      cy.visit('http://localhost:4200/')
      cy.get('.sidebar-toggle').click()
      cy.get('[class="menu-title"]').contains("Layout").click()
      cy.get('[class="menu-title"]').contains("Stepper").click()
      cy.get('.sidebar-toggle').click()
      cy.get('[type="submit"]').contains("next").click()

     // cy.get('[class="col-md-12 col-lg-12 col-xxxl-12"]')
     // .children('[class="ng-star-inserted"]').should('have.text', 'Step content #2')
     cy.get('.horizontal > .step-content > h3.ng-star-inserted').should('have.text', 'Step content #2')
     // cy.get('[class="ng-star-inserted"]').should('have.text', 'Step content #1')

     cy.get('[type="submit"]').contains("next").click()
     cy.get('.horizontal > .step-content > h3.ng-star-inserted').should('have.text', 'Step content #3')


     cy.get('[type="submit"]').contains("next").click()
     cy.get('.horizontal > .step-content > h3.ng-star-inserted').should('have.text', 'Step content #4')

     cy.get('[type="submit"]').contains("next").should('be.disabled')

    
     })
  })   