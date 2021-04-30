import { Selector, t } from "testcafe";

class SetPassword {
    password;
    confirmPassword;
    checkboxConsentOne;
    checkboxConsentTwo;
    buttonSetPassword;
    constructor() {
        this.password = Selector('[name="password"]');
        this.confirmPassword = Selector('[name="password-confirmation"]');
        this.checkboxConsentOne = Selector('[formcontrolname="allowDataProcessing"]');
        this.checkboxConsentTwo = Selector('[formcontrolname="allowMarketing"]');
        this.buttonSetPassword = Selector('button[type="submit"]');
    }

    async enterPassword(password) {
        await t.typeText(this.password, password);
    }

    async enterConfirmPassword(password) {
        await t.typeText(this.confirmPassword, password);
    }

    async selectFirstConsent() {
        await t.click(this.checkboxConsentOne);
    }

    async selectSecondConsent() {
        await t.click(this.checkboxConsentTwo);
    }

    async clickSetPassword() {
        await t.click(this.buttonSetPassword);
    }
}

export default new SetPassword();