import AddressBookActions from '../../Pages/AddressBook/AddressBookActions';
const addressBookActions = new AddressBookActions();
import addresses from '../../fixtures/addressBook.json';

describe(
   'Given a user selects to Add a new address',
   { tags: '@negative' },
   () => {
      before(() => {
         cy.visit('/opencart/index.php?route=account/login');
         cy.doLogin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
      });

      beforeEach(() => {
         /**
          * cy.session has been set and we have access to all pages
          */
         cy.visit('/opencart/index.php?route=account/address/add');
      });

      context(
         'When the user tries to enter a new address without a first name',
         () => {
            it('Then the form shall not save the new address and an empty field warning shall appear', () => {
               addressBookActions.enterNewAddress(addresses[0]);
               addressBookActions.enterFirstName('');
               addressBookActions.clickContinueBtn();

               cy.location().then(($loc) => {
                  cy.wrap($loc.pathname).should(
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
               addressBookActions.enterNewAddress(addresses[0]);
               addressBookActions.enterLastName('');
               addressBookActions.clickContinueBtn();

               cy.location().then(($loc) => {
                  cy.wrap($loc.pathname).should(
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
               addressBookActions.enterNewAddress(addresses[0]);
               addressBookActions.enterAddress1('');
               addressBookActions.clickContinueBtn();

               cy.location().then(($loc) => {
                  cy.wrap($loc.pathname).should(
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
               addressBookActions.enterNewAddress(addresses[0]);
               addressBookActions.enterCityName('');
               addressBookActions.clickContinueBtn();

               cy.location().then(($loc) => {
                  cy.wrap($loc.pathname).should(
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
               addressBookActions.enterNewAddress(addresses[0]);
               addressBookActions.selectCountry(' --- Please Select --- ');
               addressBookActions.clickContinueBtn();

               cy.location().then(($loc) => {
                  cy.wrap($loc.pathname).should(
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
               addressBookActions.enterNewAddress(addresses[0]);
               addressBookActions.selectRegionState(' --- Please Select --- ');
               addressBookActions.clickContinueBtn();

               cy.location().then(($loc) => {
                  cy.wrap($loc.pathname).should(
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
