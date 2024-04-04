import Registration from '../../Pages/Registration/RegistrationElements';
const registration = new Registration();

import RegistrationActions from '../../Pages/Registration/RegistrationActions';
const registrationAction = new RegistrationActions();

import * as User from '../../fixtures/registeredUsers.json'; // This import style requires "esModuleInterop", see "side notes"

/**
 * These are the same test scripts as 'registration.cy.ts' only that we don't use a beforeEach hook to reload the page
 * we simply clear the form and continue on with tests
 * this uses "testIsolation: false" in the cypress.config.js file
 *
 * Drawbacks, this would not be used on a submission form, but this is to show how tests can run, one after another
 * without reloading the page - there may be some use cases for this.
 */
describe.skip(
   'Given a user visits the Registration page',
   { tags: '@negative' },
   () => {
      before(() => {
         cy.visit('/opencart/index.php?route=account/register');
      });

      context(
         'When the user tries to register without a First Name',
         { tags: '@one' },
         () => {
            it('Then the Registration page shall output a missing First Name Error', () => {
               registrationAction.enterUserRegistrationInfo(User);

               registration.getFirstNameField().clear();
               registrationAction.clickSubmit();

               cy.get('div.text-danger')
                  .should('exist')
                  .and(
                     'contain.text',
                     'First Name must be between 1 and 32 characters!'
                  );
            });
         }
      );

      context('When the user tries to register without a Last Name', () => {
         it('Then the Registration page shall output a missing Last Name Error', () => {
            // New Action that clears the form - and we don't reload the page
            registrationAction.clearUserRegistrationInfo();
            registrationAction.enterUserRegistrationInfo(User);
            registration.getLastNameField().clear();
            registrationAction.clickSubmit();

            cy.get('div.text-danger')
               .should('exist')
               .and(
                  'contain.text',
                  'Last Name must be between 1 and 32 characters!'
               );
         });
      });

      context('When the user tries to register without a E-Mail Name', () => {
         it('Then the Registration page shall output a missing E-Mail Name Error', () => {
            registrationAction.clearUserRegistrationInfo();
            registrationAction.enterUserRegistrationInfo(User);
            registration.getEmailField().clear();
            registrationAction.clickSubmit();

            cy.get('div.text-danger')
               .should('exist')
               .and(
                  'contain.text',
                  'E-Mail Address does not appear to be valid!'
               );
         });
      });

      context('When the user tries to register without a Telephone', () => {
         it('Then the Registration page shall output a missing Telephone Error', () => {
            registrationAction.clearUserRegistrationInfo();
            registrationAction.enterUserRegistrationInfo(User);
            registration.getTelephoneField().clear();
            registrationAction.clickSubmit();

            cy.get('div.text-danger')
               .should('exist')
               .and(
                  'contain.text',
                  'Telephone must be between 3 and 32 characters!'
               );
         });
      });

      context('When the user tries to register without a Password', () => {
         it('Then the Registration page shall output a missing Password Error', () => {
            registrationAction.clearUserRegistrationInfo();
            registrationAction.enterUserRegistrationInfo(User);
            registration.getPasswordField().clear();
            registrationAction.clickSubmit();

            cy.get('div.text-danger')
               .first()
               .should('exist')
               .and(
                  'contain.text',
                  'Password must be between 4 and 20 characters!'
               );

            cy.get('div.text-danger')
               .last()
               .should('exist')
               .and(
                  'contain.text',
                  'Password confirmation does not match password!'
               );
         });
      });

      context(
         'When the user tries to register without confirming the Password',
         () => {
            it('Then the Registration page shall output a missmatch of Password and Confirmation Password Error', () => {
               registrationAction.clearUserRegistrationInfo();
               registrationAction.enterUserRegistrationInfo(User);
               registration.getConfirmPasswordField().clear();
               registrationAction.clickSubmit();

               cy.get('div.text-danger')
                  .should('exist')
                  .and(
                     'contain.text',
                     'Password confirmation does not match password!'
                  );
            });
         }
      );

      context(
         'When the user tries to register without confirming the Privacy Policy',
         () => {
            it('Then the Registration page shall output a Privacy Policy Agreement Error', () => {
               registrationAction.clearUserRegistrationInfo();
               registrationAction.enterUserRegistrationInfo(User);
               registrationAction.uncheckPrivacyCheckbox();
               registrationAction.clickSubmit();

               cy.get('div.alert-danger')
                  .should('exist')
                  .and(
                     'contain.text',
                     'Warning: You must agree to the Privacy Policy!'
                  );
            });
         }
      );
   }
);
