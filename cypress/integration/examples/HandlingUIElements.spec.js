// cypress/support/commands.ts

describe('This is my test suit', function () {
    it('Test the UIElements', function () {
       // cy.visit("http://demo.guru99.com/test/newtours/index.php");
        // cy.url().should('include','demo.guru99.com');
        // cy.get('input[name=userName]').should('be.visible').should('be.enabled');
        // cy.get('input[name=userName]').clear();
        // cy.get('input[name=userName]').type("mercury");
        // cy.get('input[name=password]').should('be.visible').should('be.enabled');
        // cy.get('input[name=password]').clear();
        // cy.get('input[name=password]').type("mercury");
        // cy.get('input[type=Submit]').click();
        // //title verification
        // cy.title().should('eq','Login: Mercury Tours');
        // cy.title().should('eq','Login: Mercury Tours');
        // cy.get('table:nth-child(2) tbody:nth-child(1) tr.mouseOut:nth-child(2) td:nth-child(2) > a:nth-child(1)').click();
        // cy.get('input[value=roundtrip]').should('be.visible').should('be.enabled');
        // cy.get('input[value=oneway]').click();
    // }),

        // it('Test Check boxs', function () {
         //    cy.visit('http://demo.automationtesting.in/Register.html');
        //     cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket');
        //     cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies');
        //     cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey');
        //
        //     //uncheck and verify
        //     cy.get('#checkbox1').uncheck().should('not.be.checked');
        //     cy.get('#checkbox2').uncheck().should('not.be.checked');
        //     cy.get('#checkbox3').uncheck().should('not.be.checked');
        // })
    // it('Test Skills Dropdown', function () {
    //     //Multiple selections language
    //     cy.get('#msdd').click()
    //     cy.get('.ui-corner-all').contains('Italian').click();
    //     cy.get('.ui-corner-all').contains('Hindi').click();
    //     // skills
    //     cy.get('#Skills').select('Android').should('have.value', 'Android');
    //
    //     cy.get('#countries').select('India').should('have.value', 'India');
    //     cy.get('.select2-country-container').select('India');
    //
    // })
    // it('Select countries searchable', function () {
    //     cy.visit('http://demo.automationtesting.in/Register.html');
    //     //Multiple selections language
    //     cy.get('#msdd').click()
    //     cy.get('.ui-corner-all').contains('Italian').click();
    //     cy.get('.ui-corner-all').contains('Hindi').click();
    //     //foreceful click
    //     cy.get('#basicBootstrapForm').click();
    //     // skills
    //     cy.get('#Skills').select('Android').should('have.value', 'Android');
    //     // select countries
    //     cy.get('[role=combobox]').click({force:true});
    //     cy.get('.select2-search__field').type('Ind');
    //     // forceful click
    //     cy.get('.select2-search__field').type('{enter}');
    //
    // })

    // it('Alerts', function () {
    //     //by default cypress close the alert window
    //     cy.visit('https://testautomationpractice.blogspot.com/');
    //     //Just alert window:alert
    //     //if confirmation window then
    //     cy.get('#HTML9 > div.widget-content > button').click();
    //     cy.on('window:confirm',(str) =>
    //     {
    //        expect(str).to.equal('Press a button!')
    //     })

    //     it('Navigate between pages', function () {
    //         //by default cypress close the alert window
    //         cy.visit('https://demo.nopcommerce.com/');
    //         //Just alert window:alert
    //         //if confirmation window then
    //         cy.get('.ico-register').contains('Reg').click();
    //
    //        //Go back
    //         //cy.go('back')
    //         cy.go(-1)
    //         cy.title().should('eq','nopCommerce demo store');
    //         //Go forward
    //         //cy.go('forward')
    //         cy.go(1)
    //         cy.title().should('eq','nopCommerce demo store. Register')
    //
    // })

        //https://www.youtube.com/watch?v=XrpvzUr8esY&list=PLUDwpEzHYYLu4jKg-rNSKH3aJeBinlPXp&index=14
        // it('Handling Web/HTML Table in Cypress', function () {
        //     //by default cypress close the alert window
        //     cy.visit('https://testautomationpractice.blogspot.com/');
        //     //Just alert window:alert
        //     //if confirmation window then
        //     //check the value anywhere in the table
        //     cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible').click()
        //     //check the values presence in the specific row & column
        //     cy.get('table[name=BookTable]').contains('tr[2]','Learn Selenium').should('be.visible').click()
        //
        //

         })


})

