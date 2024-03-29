import RegistrationActions from '../Pages/Registration/RegistrationActions';
const registration = new RegistrationActions();

import * as User from '../fixtures/registeredUsers.json'; // This import style requires "esModuleInterop", see "side notes"

describe('Given a user visits the Registration page', () => {
   context('When the user tries to register without a First Name', () => {
      it.only('Then the Registration page shall output a missing First Name Error', () => {
         // cy.visit('/opencart/index.php?route=account/register');
         cy.visit('/opencart/index.php?route=account/register');
         registration.enterUserRegistrationInfo(User);
      });
   });

   context('When the user tries to register without a Last Name', () => {
      it('Then the Registration page shall output a missing Last Name Error', () => {});
   });

   context('When the user tries to register without a E-Mail Name', () => {
      it('Then the Registration page shall output a missing E-Mail Name Error', () => {});
   });

   context('When the user tries to register without a Telephone', () => {
      it('Then the Registration page shall output a missing Telephone Error', () => {});
   });

   context('When the user tries to register without a Password', () => {
      it('Then the Registration page shall output a missing Password Error', () => {});
   });
});
