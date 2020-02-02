describe("Positive test case for single post ", () => {
  beforeEach(function() {
    cy.login("hyphen_admin@acmetest.com","34067");
  });

  afterEach(function() {
    cy.logout();
  });

  it("should successfully be create OPEN Post", () =>{
    cy.get('button#create-button').click();
    cy.get('button.hyphenButton.poll-btn.btn.btn-default').contains('OPEN').click();
    cy.get('div.Select-control').click();
    cy.get("div.Select-option.allOption").click();
    cy.get('button.hyphenButton.group-select-btn.btn.btn-default').click();

    cy.get('button.hyphenButton.smallButton.btn.btn-default').click();
    //Verify error message for not entering a topic
    cy.get('div.errorField').should('be.visible').contains('Please type a question');
    cy.get('textarea#textAreaField').should('be.empty').type("Random topic to post for testing");
    cy.get('button.hyphenButton.smallButton.btn.btn-default').click();
  });

});
