describe('Number Operations Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/a1'); // Change '/number-operations' to the actual URL of your component
  });

  it('Should return mean 4.67 and stdev 0.58 adding data', () => {
    // Input a number and click the add button
    cy.get('#newNumber').type('5');
    cy.get('[data-test="btn-add"]').click()
    cy.get('ul').contains('5').should('be.visible');
    cy.get('#newNumber').type('5');
    cy.get('[data-test="btn-add"]').click()
    cy.get('#newNumber').type('4');
    cy.get('[data-test="btn-add"]').click()
    cy.wait(2000);
    const numbersToCheck = ['5', '5', '4'];

  // Iterate over each number and check if it's visible in the array
  numbersToCheck.forEach((number) => {
    cy.get('ul').contains(number).should('be.visible');
  });
    cy.get('[data-test="btn-mean"]').click();
    cy.get('[data-test="btn-stdev"]').click();

    cy.get('[data-test="result-mean"]').contains('Media: 4.67').should('be.visible');
    cy.get('[data-test="result-stdev"]').contains('Desviación estándar: 0.58').should('be.visible');
    
  });



  it('Should return media 60.32 and stdev 62.26', () => {
    cy.get('[data-test="btn-hours"]').click()
    cy.wait(1000);
    const numbersToCheck = ['15', '69.9', '6.5', '22.4', '28.4', '65.9', '19.4', '198.7', '38.8', '138.2'];

  // Iterate over each number and check if it's visible in the array
  numbersToCheck.forEach((number) => {
    cy.get('ul').contains(number).should('be.visible');
  });
    cy.get('[data-test="btn-mean"]').click();
    cy.get('[data-test="btn-stdev"]').click();

    cy.wait(1000);
    cy.get('[data-test="result-mean"]').contains('Media: 60.32').should('be.visible');
    cy.get('[data-test="result-stdev"]').contains('Desviación estándar: 62.26').should('be.visible');
  });

  it('Should return media 550.6 and stdev 572.03', () => {
    cy.get('[data-test="btn-sizes"]').click();
    cy.wait(1000);
  
    // Replace these numbers with the ones you provided
    const numbersToCheck = ['160', '591', '114', '229', '230', '270', '128', '1657', '624', '1503'];
  
    // Iterate over each number and check if it's visible in the array
    numbersToCheck.forEach((number) => {
      cy.get('ul').contains(number).should('be.visible');
    });
  
    cy.get('[data-test="btn-mean"]').click();
    cy.get('[data-test="btn-stdev"]').click();
    
    cy.wait(1000);
  
    // Replace these values with the expected mean and standard deviation
    cy.get('[data-test="result-mean"]').contains('Media: 550.6').should('be.visible');
    cy.get('[data-test="result-stdev"]').contains('Desviación estándar: 572.03').should('be.visible');
  });
  
});


