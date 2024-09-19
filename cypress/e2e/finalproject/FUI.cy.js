function homepage() {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com')
}

function contactList() {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList')
}

function addContact(){
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addContact')
}

function signUp() {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser')
}

describe('click sign up button',() => {
    it ('passes', () => {
        homepage();
        cy.get('#signup').click();
        contactList();
        
    })
})

describe('login fields work',() => {
    it ('passes', () => {
        homepage();
        cy.get('#email').type('Bohnlein21@gmail.com')
        cy.get('#password').type('Mitsuha123!')
        cy.get('#submit').click()
    })
})

describe('type for reguired sign up fields', () => {
    it('passes', () => {
        addContact()
            cy.get('#firstName').type('firstname')
            cy.get('#lastName').type('lastname')
            cy.get('#birthdate').type('1999-01-01')
            cy.get('#email').type('email@gmail.com')
            cy.get('#phone').type('1415155155')
            cy.get('#street1').type('adress one')
            cy.get('#street2').type('adress 2')
            cy.get('#city').type('city')
            cy.get('#stateProvince').type('state')
            cy.get('#postalCode').type('12345')
            cy.get('#country').type('usa')
            cy.get('#submit').click()

    })
})

describe('cancel button works', ()=> {
    it('passes', () => {
        addContact()
        cy.get('#cancel').click()
    })
})

describe('logout button works', () => {
    it('passes', () => {
        contactList()
        cy.get('#logout').click()
    })
})

describe('logout button works', () => {
    it('passes', () => {
        contactList()
        cy.get('#add-contact').click()
    })
})

describe('sign up fields and submit button work',() => {
    it('passes',() => {
    signUp()
        cy.get('#firstName').type('Firstname')
        cy.get('#lastName').type('Lastname')
        cy.get('#email').type('email@gmail.com')
        cy.get('#password').type('password')
        cy.get('#submit').click()
  })
})

describe('logout button works', () => {
    it('passes', () => {
        signUp()
        cy.get('#cancel').click()
    })
})

