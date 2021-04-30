import { Selector, t } from 'testcafe';
import loginPage from '../page/loginPage';
import companyDetailsPage from '../page/companyDetailsPage';
import signupPage from '../page/signupPage';
import setPasswordPage from '../page/setPasswordPage';

fixture`Functional Test - Login Page`
    .page`https://app-demo.novemberfirst.com`;

test
    .before(async t => {
        await t
            .maximizeWindow();
    })
    ('Verify Login Page', async t => {
        loginPage.assertSignupLink();
        loginPage.assertForgotPasswordLink();
        loginPage.assertSaveCustomerNumber();
    });

test('Login functionality for valid user', async t => {
    const customerNo = '208101375';
    loginPage.enterCustomerNumber(customerNo);
    loginPage.enterEmail('qauser@novemberfirst.com');
    loginPage.enterPassword('Welcome12');
    loginPage.clickSubmit();
    companyDetailsPage.assertCompanyDetailsPage();
    const expectedCustomerNo = Selector('//span[text()=" Customer number: "]/span');
    await t.expect(expectedCustomerNo.withText(customerNo)).ok();
});

test('Login functionality for invalid user', async t => {
    loginPage.enterCustomerNumber('111444654');
    loginPage.enterEmail('testuser@novemberfirst.com');
    loginPage.enterPassword('Welcome123');
    loginPage.clickSubmit();
    const errorMessage = Selector('n1-auth-errors.ng-star-inserted');
    await t.expect(errorMessage.withText(' Your login attempt was unsuccessful. ')).ok();
});

test('Signup User', async t => {
    loginPage.clickSignup();
    signupPage.assertLoginLink();
    signupPage.enterCVR('32886094');
    signupPage.enterFirstname('Testing');
    signupPage.enterLastname('User');
    signupPage.enterEmail('qeuser@novemberfirst.com');
    signupPage.enterConfirmEmail('qeuser@novemberfirst.com');
    signupPage.enterPhone('9834072343');
    signupPage.checkApproval();
    signupPage.createAccount();
    signupPage.assertSuccessMessage();
});

fixture`Functional Test - Set New Password`
    .page`https://app-demo.novemberfirst.com/#/public/set-password/208101398/qauser@novemberfirst.com/2M5x7XGR6wFh2wFXp8tmMm72/en`;

test
    .before(async t => {
        await t
            .maximizeWindow();
    })
    ('Set New Password', async t => {
        setPasswordPage.enterPassword("Welcome123");
        setPasswordPage.enterConfirmPassword("Welcome123");
        setPasswordPage.selectFirstConsent();
        setPasswordPage.selectSecondConsent();
        setPasswordPage.clickSetPassword();
        companyDetailsPage.assertCompanyDetailsPage();
        const expectedCustomerNo = Selector('//span[text()=" Customer number: "]/span');
        await t.expect(expectedCustomerNo.withText('32886094')).ok();
    });