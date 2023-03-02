///<reference types = "cypress" />
// cy is a root package where we can access all commands

describe('Login and add to cart', () => {
    const emailId = 'jaganchowhaan@gmail.com'
    const password = 'Amazon@0994'

    beforeEach(()=>{
      cy.visit('https://www.amazon.in/');
      cy.get("#nav-link-accountList").click();
      cy.get('#ap_email').type(emailId)
      cy.get('#continue').click()
      cy.get('#ap_password').type(password)
      cy.get('#signInSubmit').click()
    })

    // it('checking site title', () =>{
    //     cy.visit("https://www.amazon.in/")
    //     cy.title().should('eq','amazon.in')
    // })
  
    it('should visit amazon website', ()=>{
      cy.url().should('contain', 'amazon.in');
    })
  
    it('Account logged in', ()=>{
      cy.get('#nav-link-accountList-nav-line-1').should('contain', 'Hello, ')
    })
  
    it('Searching for a particular item', ()=>{
      cy.get('#twotabsearchtextbox').type('laptop table for bed')
      cy.get('#nav-search-submit-button').click();

      
    })
  
    it('Buying that particular selected item', () => {
      cy.get('#twotabsearchtextbox').type('laptop table for bed')
      cy.get('#nav-search-submit-button').click();
      cy.get('.rush-component > .a-row').click();
      cy.get('#buy-now-button').click();
    })
  
    it('chekcout page confirmation', ()=>{
      cy.get('#twotabsearchtextbox').type('laptop table for bed')
      cy.get('#nav-search-submit-button').click();
      cy.get('#buy-now-button').click();
      cy.url().should('contain', 'payselect');
    })
  
  
  })





















