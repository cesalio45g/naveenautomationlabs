import LoginActions from '../Pages/Login/LoginActions';
const loginActions = new LoginActions();

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('doLogin', (email, password) => {
   /**
    *
    */
   cy.session(
      [email, password],
      () => {
         // Logging in via API
         //
         // cy.request({
         //    method: 'POST',
         //    url: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
         //    body: {
         //       email,
         //       password,
         //       redirect:
         //          'https://naveenautomationlabs.com/opencart/index.php?route=account/account',
         //    },
         // });
         //
         // We assume we are on the ?route=account/login page already
         // and we have cleared cookies before logging in
         //
         loginActions.enterEmailAddress(email);
         loginActions.enterPassword(password);
         loginActions.clickLoginBtn();
      },
      {
         cacheAcrossSpecs: true,
      }
   );
   cy.getCookie('OCSESSID').should('exist');
   cy.location().then(($loc) => {
      cy.wrap($loc.pathname).should('eq', '?route=account/account');
   });
});
