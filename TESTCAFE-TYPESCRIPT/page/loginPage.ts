import { t, Selector } from 'testcafe';

class LoginPage {
    customerNumber;
    email;
    password;
    buttonSubmit;
    linkSignup;
    linkForgotPwd;
    checkboxSaveCustomerNo;
    constructor() {
        this.customerNumber = Selector('[name="customer-number"]');
        this.email = Selector('[name="email"]');
        this.password = Selector('[name="password"]');
        this.buttonSubmit = Selector('[type="submit"]');
        this.linkSignup = Selector('a[href*="signup"]');
        this.linkForgotPwd = Selector('a[href*="forgot-password"]')
        this.checkboxSaveCustomerNo = Selector('#save-customer-number');
    }

    async enterCustomerNumber(number) {
        await t.typeText(this.customerNumber, number);
    }

    async enterEmail(email) {
        await t.typeText(this.email, email);
    }

    async enterPassword(password) {
        await t.typeText(this.password, password);
    }

    async clickSubmit() {
        await t.click(this.buttonSubmit);
    }

    async assertSignupLink() {
        await t.expect(this.linkSignup).ok();
    }

    async assertForgotPasswordLink() {
        await t.expect(this.linkForgotPwd).ok();
    }

    async assertSaveCustomerNumber() {
        await t.expect(this.checkboxSaveCustomerNo).ok();
    }

    async clickSignup() {
        await t.click(this.linkSignup);
    }
}

export default new LoginPage();
