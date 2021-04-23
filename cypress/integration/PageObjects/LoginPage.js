class LoginPage {

    visit() {
        cy.visit('https://admin-demo.nopcommerce.com/login');
    }

    fillEmail(value) {
        cy.get('input[name=Email]').clear().type(value)
        return this

    }

    fillPassword(value) {
        cy.get('#Password').clear().type(value);
        return this
    }

    submit(value) {
        cy.get('[type=submit]').click()
    }
}

export default LoginPage



