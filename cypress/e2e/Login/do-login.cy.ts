/// <reference types="Cypress" />

describe('Given a user visits the Login page', () => {
   beforeEach(() => {
      cy.visit('/opencart/index.php?route=account/login');
   });

   context.skip(
      'When the user enters a valid e-mail and password and tries to login',
      { tags: 'functional' },
      () => {
         it('Then the login attempt shall succeed', () => {});
      }
   );
});
