function website() {
    cy.visit('https://demoqa.com/alerts');
}



describe('login Test', () => {
    it ('passes', () => {
 website();
 //click on alert button
 cy.get('#alertButton').click();
//firing window alert
 cy.on('window:alert',(txt) => {
//mocha assertion
    expect(txt).to.contain('You clicked a button');

        })
    })
}) 

describe ('timer alert', () => {
    
    it ('passes', () => {
        website();

        cy.get('#timerAlertButton').click();

        cy.on('window:alert',(txt) => {
            expect(txt).to.contain('This alert appeared after 5 seconds');
        })
    })
})

describe ('timer alert', () => {
    it ('passes', () => {
        website();

        cy.get('#confirmButton').click();

        cy.on('window:alert',(txt) => {
            expect(txt).to.conatin('Do you confirm action?');
        })
    })
})