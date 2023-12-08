
// specs.ts

describe( 'My First Test', () =>{
    it('Should visit the login page', ()=>{
      cy.visit('/login')
     cy.url().should('includes', 'login')
      cy.get('#loginFormTitle').should ('be.visible')
      cy.get('#loginFormTitle').should ('have.text', 'Login Form')
    })
  })
  
  // specs.ts
  
  describe('My First Test', () =>{
    it('Should visit the login page', () =>{
       cy.visit('/login');
       cy.url().should('includes', 'login');
       cy.get('#loginFormTitle').should('be.visible');
       cy.get('#loginFormTitle').should ('have.text', 'Login Form');
       cy.get('#loginFormEmailInputValue').should('not.exist');
       cy.get('#loginFormPasswordInputValue').should ('not.exist');
    })
   });


   describe('Error', () =>{
    it('should show an error message for invalid login', () =>{
        cy.visit('/login');
        cy.url().should('include', 'login');
        cy.wait(2000);
        // Enter invalid email and password
        cy.get('#loginFormEmailInput').type('invalid@gmail.com');
        cy.get('#loginFormPasswordInput').type('invalidPassword');
        
        // Click the submit button
        cy.get('#loginFormSubmitButton').click();
        
        // Check if the error message is visible
        cy.get('.error-message').should('be.visible');
        cy.get('.error-message').should('have.text', 'Invalid email or password. Please try again.');
    })
   });

  
   describe('Valid Email', () =>{
    it('Should enter valid email and password and redirect to the mainmenu', () =>{
      cy.visit('/login')
      cy.url().should ('includes', 'login');
      cy.get('#loginFormEmailInput').type('prueba@gmail.com');
      cy.get('#loginFormPasswordInput').type( '12345');
      cy.get('#loginFormSubmitButton').click();
    })
   });