describe('Hooks Demo', function () {

    // beforeEach(() => {
    //     cy.fixture('example').then(function (data) {
    //         this.data = data
    //     })
    // })

    it('Valid UserName and Password', function () {
        cy.login('admin@yourstore.com', 'admin');
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')

    })
    // it('Valid UserName and Invalid Password', function () {
    //     cy.login('admin@yourstore.com', 'admin1');
    //     cy.title().should('not.be.equal', 'Dashboard / nopCommerce administration')
    // })
    //
    // it('Invalid UserName and Valid password', function () {
    //     cy.login('admin@yourstore1.com', 'admin');
    //     cy.title().should('not.be.equal', 'Dashboard / nopCommerce administration')
    // })

})

