/// <reference types="Cypress" />

describe('Given a user attempts to login to the NAL login page', () => {
   context(
      'When the user makes the login API request with valid credentials',
      () => {
         it('Then the api shall respond with a 200 response code and allow the user access', () => {
            cy.request({
               method: 'POST',
               url: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
               body: {
                  email: Cypress.env('EMAIL'),
                  password: Cypress.env('PASSWORD'),
               },
            }).then((resp) => {
               expect(resp.status).to.eq(200);
            });

            cy.location().should((loc) => {
               expect(loc.search).to.be.eq('?route=account/login');
            });

            cy.wait(5000);

            cy.request({
               method: 'GET',
               url: '/opencart/index.php?route=account/logout',
            }).then((resp) => {
               expect(resp.status).to.eq(200);
            });

            cy.location().should((loc) => {
               expect(loc.search).to.be.eq('?route=account/logout');
            });
         });
      }
   );
});
