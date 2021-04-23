import LoginPage from "../PageObjects/LoginPage";

describe('call page objects', () => {
    const login = new LoginPage()

    beforeEach(() => {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Searching', function () {
        login.visit()
        login.fillEmail(this.data.Email)
        login.fillPassword(this.data.Password)
        login.submit();
    })


})
