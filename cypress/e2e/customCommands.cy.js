const username = 'standard_user'
const pw = 'secret_sauce'


describe('cypress command success', () => {
    it('passes', () => {
    
        cy.login(username, pw);
    })
})