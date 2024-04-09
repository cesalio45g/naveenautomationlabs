import AddressBookElements from '../../Pages/AddressBook/AddressBookElements';
const addressBookElements = new AddressBookElements();
import AddressBookActions from '../../Pages/AddressBook/AddressBookActions';
const addressBookActions = new AddressBookActions();
import Address from '../../fixtures/addressBook.json';

describe(
   'Given a user selects to Add a new address',
   { tags: '@negative' },
   () => {
      before(() => {
         cy.clearAllSessionStorage();
         cy.visit('/opencart/index.php?route=account/login');
         cy.doLogin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
      });

      beforeEach(() => {
         /**
          * cy.session has been set and we have access to all pages
          */
         cy.visit('/opencart/index.php?route=account/address/add');
      });

      after(() => {
         cy.doLogout();
      });

      context(
         'When the user tries to enter a new address without a first name',
         () => {
            it('Then the form shall not save the new address and an empty field warning shall appear', () => {
               // we cannot type an empty string, we need to use .clear()
               addressBookActions.enterNewAddress(Address);
               addressBookElements.getFirstNameField().clear();
               addressBookActions.clickContinueBtn();

               cy.location().then(($loc) => {
                  cy.wrap($loc.search).should(
                     'eq',
                     '?route=account/address/add'
                  );
               });
               cy.get('div.text-danger')
                  .should('exist')
                  .and(
                     'contain.text',
                     'First Name must be between 1 and 32 characters!'
                  );
            });
         }
      );

      context(
         'When the user tries to enter a new address wihtout a last name',
         () => {
            it('Then the form shall not save the new address and an empty field warning shall appear', () => {
               addressBookActions.enterNewAddress(Address);
               addressBookElements.getLastNameField().clear();
               addressBookActions.clickContinueBtn();

               cy.location().then(($loc) => {
                  cy.wrap($loc.search).should(
                     'eq',
                     '?route=account/address/add'
                  );
               });
               cy.get('div.text-danger')
                  .should('exist')
                  .and(
                     'contain.text',
                     'Last Name must be between 1 and 32 characters!'
                  );
            });
         }
      );

      context(
         'When the user tries to enter a new address without an Address1',
         () => {
            it('Then the form shall not save the new address and an empty field warning shall appear', () => {
               addressBookActions.enterNewAddress(Address);
               addressBookElements.getAddress1Field().clear();
               addressBookActions.clickContinueBtn();

               cy.location().then(($loc) => {
                  cy.wrap($loc.search).should(
                     'eq',
                     '?route=account/address/add'
                  );
               });
               cy.get('div.text-danger')
                  .should('exist')
                  .and(
                     'contain.text',
                     'Address must be between 3 and 128 characters!'
                  );
            });
         }
      );

      context(
         'When the user tries to enter a new address without a city',
         () => {
            it('Then the form shall not save the new address an empty field warning shall appear', () => {
               addressBookActions.enterNewAddress(Address);
               addressBookElements.getCityField().clear();
               addressBookActions.clickContinueBtn();

               cy.location().then(($loc) => {
                  cy.wrap($loc.search).should(
                     'eq',
                     '?route=account/address/add'
                  );
               });
               cy.get('div.text-danger')
                  .should('exist')
                  .and(
                     'contain.text',
                     'City must be between 2 and 128 characters!'
                  );
            });
         }
      );

      context(
         'When the user tries to enter a new address without a Country',
         () => {
            it('Then the form shall not save the new address and an empty field warning shall appear', () => {
               addressBookActions.enterNewAddress(Address);
               addressBookElements.getCountryField().select(0);
               addressBookActions.clickContinueBtn();

               cy.location().then(($loc) => {
                  cy.wrap($loc.search).should(
                     'eq',
                     '?route=account/address/add'
                  );
               });
               cy.get('div.text-danger')
                  .should('exist')
                  .and('contain.text', 'Please select a country!');
            });
         }
      );

      context(
         'When the user tries to enter a new address without a Region/State',
         () => {
            it('Then the form shall not save the new address and an empty field warning shall appear', () => {
               addressBookActions.enterNewAddress(Address);
               addressBookElements.getRegionStateField().select(0);
               addressBookActions.clickContinueBtn();

               cy.location().then(($loc) => {
                  cy.wrap($loc.search).should(
                     'eq',
                     '?route=account/address/add'
                  );
               });
               cy.get('div.text-danger')
                  .should('exist')
                  .and('contain.text', 'Please select a region / state!');
            });
         }
      );
   }
);
