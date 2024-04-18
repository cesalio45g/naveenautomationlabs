/// <reference types="Cypress" />
import LoginActions from '../../Pages/Login/LoginActions';
const loginActions = new LoginActions();
import { sideNavMenuItems } from '../../Pages/Login/LoginElements';

describe('Given a user visits the Login page', () => {
   beforeEach(() => {
      cy.clearAllSessionStorage();
      cy.visit('/opencart/index.php?route=account/login');
   });

   context(
      'When we validate the content of the login widget',
      { tags: '@functional' },
      () => {
         it('Then the title of the login login widget shall be Returning Customer', () => {
            cy.get('div.col-sm-6')
               .last()
               .within(() => {
                  cy.get('h2').should('have.text', 'Returning Customer');
                  cy.get('p').should('have.text', 'I am a returning customer');
               });
         });

         it('Then the lables for the input fields shall be correct', () => {
            cy.get('div.col-sm-6')
               .last()
               .within(() => {
                  cy.get('label').first().should('have.text', 'E-Mail Address');
                  cy.get('label').last().should('have.text', 'Password');
               });
         });

         it('Then the page shall contain a side navigation menu bar with links', () => {
            cy.get('aside#column-right div').within(() => {
               cy.get('a').each(($a, index, $list) => {
                  cy.wrap($a).should('contain.text', sideNavMenuItems[index]);
               });
            });
         });
      }
   );

   context(
      'When the user enters invalid e-mail credentials and tries to login',
      { tags: '@negative' },
      () => {
         it('Then the login attempt shall fail and an invalid e-mail warning message shall appear', () => {
            loginActions.enterEmailAddress('invalidEmail');
            loginActions.enterPassword(Cypress.env('PASSWORD'));
            loginActions.clickLoginBtn();

            cy.get('div.alert-danger')
               .should('exist')
               .and(
                  'contain.text',
                  'Warning: No match for E-Mail Address and/or Password.'
               );

            cy.location().then((loc) => {
               expect(loc.pathname).to.eq('/opencart/index.php');
            });
         });
      }
   );

   context(
      'When the user enters invalid password credentials and tries to login',
      { tags: '@negative' },
      () => {
         it('Then the login attempt shall fail and an invalid password warning message shall appear', () => {
            loginActions.enterEmailAddress(Cypress.env('EMAIL'));
            loginActions.enterPassword('invalidPassword');
            loginActions.clickLoginBtn();

            cy.get('div.alert-danger')
               .should('exist')
               .and(
                  'contain.text',
                  'Warning: No match for E-Mail Address and/or Password.'
               );

            cy.location().then((loc) => {
               expect(loc.pathname).to.eq('/opencart/index.php');
            });
         });
      }
   );
});
