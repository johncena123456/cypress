// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.visit("/");
    cy.get("input[name='email']").should('be.empty').type(username);
    cy.get("span.ladda-label").click();
    cy.get("input[name='verificationCode']").should('be.empty').type(password);
    cy.get("button.hyphenButton.btn.btn-primary").click();
  });

Cypress.Commands.add('logout', ()=>{
    cy.get('span#settings-popover').click();
    cy.get('div.item-popover-option').contains('Logout').click();
});