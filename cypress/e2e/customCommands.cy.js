const username = 'standard_user'
const pw = 'secret_sauce'

Cypress.Commands.add('login',(username, pw) => {
            cy.visit('https://www.saucedemo.com')
            cy.get('[data-test="username"]').type(username)
            cy.get('[data-test="password"]').type(pw)
            cy.get('[data-test="login-button"]').click()
        });
    


describe('cypress command success', () => {
    it('passes', () => {
    
        cy.login(username, pw);
    })
})