/// <reference types="cypress" />

context('Verify Confirm Email Link', () => {
    const serverId = "qf33xb7z";
    const serverDomain = "qf33xb7z.mailosaur.net";
    const emailAddress = "confirm-mail@" + serverDomain;


    it('Verify the confirmation email', () => {
        cy.visit('https://app-demo.novemberfirst.com/#/public/signup');
        cy.get('[formcontrolname="registrationNumber"]').type('32886094');
        cy.get('[name="first-name"]').type('abc');
        cy.get('[name="last-name"]').type('test');
        cy.get('[name="email"]').type(emailAddress);
        cy.get('[formcontrolname="emailConfirmation"]').type(emailAddress);
        cy.get('[name="phone-number"]').type("6865659787");
        cy.get('span.mat-checkbox-inner-container').click();
        cy.get('button[type="submit"]').click();

        cy.mailosaurGetMessage(serverId, {
            sentTo: emailAddress
        }).then(email => {
            cy.log(email.subject)
            confirmEmailLink = email.html.links[0].href
        })
    })
})