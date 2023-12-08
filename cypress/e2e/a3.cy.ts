describe('Number Operations Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/a3'); // Change '/number-operations' to the actual URL of your component
    });
  
    it('Square = 16', () => {
        // Input numbers for array 1
        cy.get('#x0').type('0');
        cy.get('#x1').type('4');
        cy.get('#numSegmento').type('4');
        cy.get('[data-test="btn-square"]').click();
      cy.get('[data-test="result"]').contains('Resultado: 16').should('be.visible');
      });

      it('Triangule = 0.33', () => {
        // Input numbers for array 1
        cy.get('#x0').type('0');
        cy.get('#x1').type('1');
        cy.get('#numSegmento').type('4');
        cy.get('[data-test="btn-triangule"]').click();
      cy.get('[data-test="result"]').contains('Resultado: 0.3333333333333333').should('be.visible');
      });

      it('Irregular = 1.38', () => {
        // Input numbers for array 1
        cy.get('#x0').type('1');
        cy.get('#x1').type('4');
        cy.get('#numSegmento').type('6');
        cy.get('[data-test="btn-irregular"]').click();
      cy.get('[data-test="result"]').contains('Resultado: 1.38').should('be.visible');
      });

      it('T = 0.3500589042865572', () => {
        // Input numbers for array 1
        cy.get('#x0').type('0');
        cy.get('#x1').type('1.1');
        cy.get('#numSegmento').type('10');
        cy.get('#dof').type('9');
        cy.get('[data-test="btn-t"]').click();
      cy.get('[data-test="result"]').contains('Resultado: 0.3500589042865572').should('be.visible');
      });
  
      it('T = 0.3675736956440643', () => {
        // Input numbers for array 1
        cy.get('#x0').type('0');
        cy.get('#x1').type('1.1812');
        cy.get('#numSegmento').type('10');
        cy.get('#dof').type('10');
        cy.get('[data-test="btn-t"]').click();
      cy.get('[data-test="result"]').contains('Resultado: 0.3675736956440643').should('be.visible');
      });
  
      it('T = 0.3500586368972011', () => {
        // Input numbers for array 1
        cy.get('#x0').type('0');
        cy.get('#x1').type('1.1');
        cy.get('#numSegmento').type('20');
        cy.get('#dof').type('9');
        cy.get('[data-test="btn-t"]').click();
      cy.get('[data-test="result"]').contains('Resultado: 0.3500586368972011').should('be.visible');
      });
  
  
  });
  
  
  