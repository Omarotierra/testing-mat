describe('Number Operations Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/a2'); // Change '/number-operations' to the actual URL of your component
    });
  
    it('Should fill arrays with provided data and calculate values', () => {
        // Input numbers for array 1
        cy.get('#newNumber1').type('130');
        cy.get('[data-test="btn-add1"]').click();
        cy.wait(500);
        cy.get('#newNumber1').type('650');
        cy.get('[data-test="btn-add1"]').click();
        cy.wait(500);
        cy.get('#newNumber1').type('99');
        cy.get('[data-test="btn-add1"]').click();
        cy.wait(500);
        cy.get('#newNumber1').type('150');
        cy.get('[data-test="btn-add1"]').click();
        cy.wait(500);
        cy.get('#newNumber1').type('128');
        cy.get('[data-test="btn-add1"]').click();
        cy.wait(500);
        cy.get('#newNumber1').type('302');
        cy.get('[data-test="btn-add1"]').click();
        cy.wait(500);
        cy.get('#newNumber1').type('95');
        cy.get('[data-test="btn-add1"]').click();
        cy.wait(500);
        cy.get('#newNumber1').type('945');
        cy.get('[data-test="btn-add1"]').click();
        cy.wait(500);
        cy.get('#newNumber1').type('368');
        cy.get('[data-test="btn-add1"]').click();
        cy.wait(500);
        cy.get('#newNumber1').type('961');
        cy.get('[data-test="btn-add1"]').click();
        cy.wait(500);
   
        // Input numbers for array 2
        cy.get('#newNumber2').type('186');
        cy.get('[data-test="btn-add2"]').click();
        cy.get('#newNumber2').type('699');
        cy.get('[data-test="btn-add2"]').click();
        cy.get('#newNumber2').type('132');
        cy.get('[data-test="btn-add2"]').click();
        cy.get('#newNumber2').type('272');
        cy.get('[data-test="btn-add2"]').click();
        cy.get('#newNumber2').type('291');
        cy.get('[data-test="btn-add2"]').click();
        cy.get('#newNumber2').type('331');
        cy.get('[data-test="btn-add2"]').click();
        cy.get('#newNumber2').type('199');
        cy.get('[data-test="btn-add2"]').click();
        cy.get('#newNumber2').type('1890');
        cy.get('[data-test="btn-add2"]').click();
        cy.get('#newNumber2').type('788');
        cy.get('[data-test="btn-add2"]').click();
        cy.get('#newNumber2').type('1601');
        cy.get('[data-test="btn-add2"]').click();
    
        const numbersToCheck1 = ['130', '650', '99', '150', '128', '302', '95', '945', '368', '961'];
      const numbersToCheck2 = ['186', '699', '132', '272', '291', '331', '199', '1890', '788', '1601'];
      // Iterate over each number and check if it's visible in the array
      numbersToCheck1.forEach((number) => {
        cy.get('ul').contains(number).should('be.visible');
      });
      numbersToCheck2.forEach((number) => {
        cy.get('ul').contains(number).should('be.visible');
      });
      cy.wait(1000);
    
        // Input a value for x and click the result button
        cy.get('[data-test="btn-result"]').click();
        
        // Replace these values with the expected mean and standard deviation
      cy.get('[data-test="result-r"]').contains('R: 0.9544965741046826').should('be.visible');
      cy.get('[data-test="result-rr"]').contains('RR: 0.9110637099775758').should('be.visible');
      cy.get('[data-test="result-b0"]').contains('b0: NaN').should('be.visible');
      cy.get('[data-test="result-b1"]').contains('b1: NaN').should('be.visible');
      cy.get('[data-test="result-y"]').contains('y: NaN').should('be.visible');
      });
  
  
  
  
    it('Should return results of test 1', () => {
      cy.get('[data-test="btn-test1"]').click();
      cy.wait(1000);
    
      // Replace these numbers with the ones you provided
      const numbersToCheck1 = ['130', '650', '99', '150', '128', '302', '95', '945', '368', '961'];
      const numbersToCheck2 = ['186', '699', '132', '272', '291', '331', '199', '1890', '788', '1601'];
      // Iterate over each number and check if it's visible in the array
      numbersToCheck1.forEach((number) => {
        cy.get('ul').contains(number).should('be.visible');
      });
      numbersToCheck2.forEach((number) => {
        cy.get('ul').contains(number).should('be.visible');
      });
      cy.get('#x').type('386');
      cy.get('[data-test="btn-result"]').click();      
      cy.wait(1000);
    
      // Replace these values with the expected mean and standard deviation
      cy.get('[data-test="result-r"]').contains('R: 0.9544965741046826').should('be.visible');
      cy.get('[data-test="result-rr"]').contains('RR: 0.9110637099775758').should('be.visible');
      cy.get('[data-test="result-b0"]').contains('b0: -22.55253275203422').should('be.visible');
      cy.get('[data-test="result-b1"]').contains('b1: 1.727932426206986').should('be.visible');
      cy.get('[data-test="result-y"]').contains('y: 644.4293837638623').should('be.visible');
    });
    
    it('Should return results of Test 2', () => {
        // Click the button for Test 1
        cy.get('[data-test="btn-test2"]').click();
        cy.wait(1000);
    
        // Replace these values with the expected numbers for Test 1
        const numbersToCheck1 = ['130', '650', '99', '150', '128', '302', '95', '945', '368', '961'];
        const numbersToCheck2 = ['15', '69.9', '6.5', '22.4', '28.4', '65.9', '19.4', '198.7', '38.8', '138.2'];
    
        // Iterate over each number and check if it's visible in the array
        numbersToCheck1.forEach((number) => {
          cy.get('ul').contains(number).should('be.visible');
        });
    
        numbersToCheck2.forEach((number) => {
          cy.get('ul').contains(number).should('be.visible');
        });
    
        // Input a value for x and click the result button
        cy.get('#x').type('386');
        cy.get('[data-test="btn-result"]').click();
        cy.wait(1000);
    
        // Replace these values with the expected calculated results for Test 2
        cy.get('[data-test="result-r"]').contains('R: 0.9333068981405511').should('be.visible');
        cy.get('[data-test="result-rr"]').contains('RR: 0.871061766116737').should('be.visible');
        cy.get('[data-test="result-b0"]').contains('b0: -4.038881574687582').should('be.visible');
        cy.get('[data-test="result-b1"]').contains('b1: 0.168126649881629').should('be.visible');
        cy.get('[data-test="result-y"]').contains('y: 60.858005279621224').should('be.visible');
      });
    
      it('Should return results of Test 3', () => {
        // Click the button for Test 3
        cy.get('[data-test="btn-test3"]').click();
        cy.wait(1000);
    
        // Replace these values with the expected numbers for Test 3
        const numbersToCheck1 = ['163', '765', '141', '166', '137', '355', '136', '1206', '433', '1130'];
        const numbersToCheck2 = ['186', '699', '132', '272', '291', '331', '199', '1890', '788', '1601'];
    
        // Iterate over each number and check if it's visible in the array
        numbersToCheck1.forEach((number) => {
          cy.get('ul').contains(number).should('be.visible');
        });
    
        numbersToCheck2.forEach((number) => {
          cy.get('ul').contains(number).should('be.visible');
        });
    
        // Input a value for x and click the result button
        cy.get('#x').type('386');
        cy.get('[data-test="btn-result"]').click();
        cy.wait(1000);
    
        // Replace these values with the expected calculated results for Test 3
        cy.get('[data-test="result-r"]').contains('R: 0.9631140931490527').should('be.visible');
        cy.get('[data-test="result-rr"]').contains('RR: 0.9275887564223222').should('be.visible');
        cy.get('[data-test="result-b0"]').contains('b0: -23.92388825291537').should('be.visible');
        cy.get('[data-test="result-b1"]').contains('b1: 1.430966943551199').should('be.visible');
        cy.get('[data-test="result-y"]').contains('y: 528.4293519578474').should('be.visible');
      });

      it('Should return results of Test 4', () => {
        // Click the button for Test 4
        cy.get('[data-test="btn-test4"]').click();
        cy.wait(1000);
    
        // Replace these values with the expected numbers for Test 4
        const numbersToCheck1 = ['163', '765', '141', '166', '137', '355', '136', '1206', '433', '1130'];
        const numbersToCheck2 = ['15', '69.9', '6.5', '22.4', '28.4', '65.9', '19.4', '198.7', '38.8', '138.2'];
    
        // Iterate over each number and check if it's visible in the array
        numbersToCheck1.forEach((number) => {
          cy.get('ul').contains(number).should('be.visible');
        });
    
        numbersToCheck2.forEach((number) => {
          cy.get('ul').contains(number).should('be.visible');
        });
    
        // Input a value for x and click the result button
        cy.get('#x').type('386');
        cy.get('[data-test="btn-result"]').click();
        cy.wait(1000);
    
        // Replace these values with the expected calculated results for Test 4
        cy.get('[data-test="result-r"]').contains('R: 0.9480329874300507').should('be.visible');
        cy.get('[data-test="result-rr"]').contains('RR: 0.8987665452555467').should('be.visible');
        cy.get('[data-test="result-b0"]').contains('b0: -4.603745423308976').should('be.visible');
        cy.get('[data-test="result-b1"]').contains('b1: 0.1401635263888363').should('be.visible');
        cy.get('[data-test="result-y"]').contains('y: 49.49937576278184').should('be.visible');
      });
  });
  
  
  