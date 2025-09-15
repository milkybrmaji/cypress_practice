



describe('Cypress Demo Tests', () => {
    it('Visits the kitchen sink example', () => {
        cy.visit('https://example.cypress.io');
        cy.title().should('include', 'Cypress');
    });

    it('navigates to the Querying page', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('get').click() // finds a link with text "get" and clicks it
        cy.url().should('include', '/commands/querying')
    })

    it('interacts with a button', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-btn').click()
        cy.get('#action-canvas').should('be.visible') // assert an element on the page is visible
    })
});