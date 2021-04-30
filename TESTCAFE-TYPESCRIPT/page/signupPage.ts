import { Selector, t } from "testcafe";

class SignupPage {
    linkLogin;
    cvr;
    firstname;
    lastname;
    email;
    confirmEmail;
    phone;
    checkboxApprove;
    buttonCreateAccount;
    successMessage;
    constructor() {
        this.linkLogin = Selector('a.link');
        this.cvr = Selector('[name="registration-number"]');
        this.firstname = Selector('[name="first-name"]');
        this.lastname = Selector('[name="last-name"]');
        this.email = Selector('[name="email"]');
        this.confirmEmail = Selector('[formcontrolname="emailConfirmation"]');
        this.phone = Selector('[name="phone-number"]');
        this.checkboxApprove = Selector('span.mat-checkbox-inner-container');
        this.buttonCreateAccount = Selector('button[type="submit"]');
        this.successMessage = Selector('//h1[contains(text(),"Please confirm your email")]');
    }

    async assertLoginLink() {
        await t.expect(this.linkLogin).ok();
    }

    async enterCVR(number) {
        await t.typeText(this.cvr, number);
    }

    async enterFirstname(firstname) {
        await t.typeText(this.firstname, firstname);
    }

    async enterLastname(lastname) {
        await t.typeText(this.lastname, lastname);
    }

    async enterEmail(email) {
        await t.typeText(this.email, email);
    }

    async enterConfirmEmail(confirmEmail) {
        await t.typeText(this.confirmEmail, confirmEmail);
    }

    async enterPhone(number) {
        await t.typeText(this.phone, number);
    }

    async checkApproval() {
        await t.click(this.checkboxApprove);
    }

    async createAccount() {
        await t.click(this.buttonCreateAccount);
    }

    async assertSuccessMessage() {
        await t.expect(this.successMessage).ok();
    }
}

export default new SignupPage();