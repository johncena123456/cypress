describe("Positive test case for multiple post", () => {
    beforeEach(function() {
      cy.login("hyphen_admin@acmetest.com","34067");
    });
  
    afterEach(function() {
      cy.logout();
    });
  
    it("should successfully be create Multiple choice Post", () =>{
    cy.get('button#create-button',{timeout:10000}).should('be.visible').click();
    cy.get('button.hyphenButton.poll-btn.btn.btn-default').contains('MULTIPLE CHOICE').click();
    cy.get('div.Select-control').click();
    cy.get("div.Select-option.allOption").click();
    cy.get('button.hyphenButton.group-select-btn.btn.btn-default').click();

    cy.get('button.hyphenButton.smallButton.btn.btn-default').click();
    //Verify error message for not entering a topic
    cy.get('div.errorField').should('be.visible').contains('Please type a question');
    cy.get('textarea#textAreaField').should('be.empty').type("Random topic to post for testing");
    cy.get('input[name="option1"]').should('be.empty').type('option 1 for testing');
    cy.get('button.hyphenButton.smallButton.btn.btn-default').click();
    //Verify error message for not entering required number of options
    cy.get('div.errorField').should('be.visible').contains('No empty options between non-empty options.');
    cy.get('input[name="option2"]').should('be.empty').type('option 2 for testing');
    cy.get('button.hyphenButton.smallButton.btn.btn-default').click();
  });

});
