const username = 'standard_user';
const password = 'secret_sauce';  


function launchApplication() {

  cy.visit('https://www.saucedemo.com');

}

function enterUsername(username){
  cy.get('[data-test="username"]').type(username);
}

function enterPassword(password){
  cy.get('[data-test="password"]').type(password);
}

function clickLoginButton(){
  cy.get('[data-test="login-button"]').click();
}

function verifyLoginSuccess() {
  it ('login succesfull', () => {
    
      cy.visit('https://www.saucedemo.com/inventory.html');
  }) 
}

describe('login Test', () => { 
  it ('should log in successfully', () => {
      launchApplication();
      enterUsername(username);
      enterPassword(password);
      clickLoginButton();
      verifyLoginSuccess();
  });
 });

describe('check price', () => {
  it('passes', () => {
     
      launchApplication();
      enterUsername(username);
      enterPassword(password);
      clickLoginButton();
      verifyLoginSuccess();
    cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').should('contain' , '29.99');

  })
})

describe('check out tab works', () => {
      it('passes', () => {

   launchApplication();
  enterUsername(username);
  enterPassword(password);
  clickLoginButton();
  verifyLoginSuccess();
  
  cy.get('[data-test="shopping-cart-link"]').click();
})
})

describe('add to cart', () => {
  it('passes', () => {

launchApplication();
enterUsername(username);
enterPassword(password);
clickLoginButton();
verifyLoginSuccess();

cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
cy.get('[data-test="shopping-cart-link"]').click()

  })
})
