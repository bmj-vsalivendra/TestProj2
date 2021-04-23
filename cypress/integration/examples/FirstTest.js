
describe('Login Suite', () => {
    it('Positive Test: Verify web page title', () => {
        cy.visit('https://demo.nopcommerce.com/');
        //Enter test in search box
        cy.get('#small-searchterms').type("Apple MacBook Pro 13-inch");
        cy.get('#small-search-box-form > .button-1').click();
        cy.contains('Apple MacBook Pro 13-inch');
        cy.get('.product-box-add-to-cart-button').click();
        cy.get('#price-value-4').contains('$1,800.00')
        cy.get('#product_enteredQuantity_4').clear().type('2');
        cy.get('#add-to-cart-button-4').click();
        cy.get('.cart-label').click();

        // cy.get('.ico-login').click();
        // cy.get('#Email').type('Email');
        // cy.get('#Password').type('password');
        // cy.title().should('eq', 'nopCommerce demo store. Login');
    })

    // it('Negative Test: Verify web page title', () => {
    //     cy.visit('https://demo.nopcommerce.com/');
    //     cy.title().should('eq', 'nopCommerce demo store');
    // })
})
