class AddressBookElements {
   /**
    *
    * @returns the first name input field on the Add Address page
    */
   getFirstNameField() {
      return cy.get('input[name="firstname"]');
   }

   /**
    *
    * @returns the last name input field on the Add Address page
    */
   getLastNameField() {
      return cy.get('input[name="lastname"]');
   }

   /**
    *
    * @returns the company input field on the Add Address page
    */
   getCompanyField() {
      return cy.get('input[name="company"]');
   }

   /**
    *
    * @returns the Address 1 input field on the Add Address page
    */
   getAddress1Field() {
      return cy.get('input[name="address_1"]');
   }

   /**
    *
    * @returns the Address 2 input field on the Add Address page
    */
   getAddress2Field() {
      return cy.get('input[name="address_2"]');
   }

   /**
    *
    * @returns the City input field on the Add Address page
    */
   getCityField() {
      return cy.get('input[name="city"]');
   }

   /**
    *
    * @returns the Post Code input field on the Add Address page
    */
   getPostCodeField() {
      return cy.get('input[name="postcode"]');
   }

   /**
    *
    * @returns the Country input field on the Add Address page
    */
   getCountryField() {
      return cy.get('select[name="country_id"]');
   }

   /**
    *
    * @returns the Region/State input field on the Add Address page
    */
   getRegionStateField() {
      return cy.get('select[name="zone_id"]');
   }

   /**
    *
    * @returns the Default Address "Yes" radio button on the Add Address page
    */
   getDefaultAddressYes() {
      return cy.get('input[type="radio"][value="1"]');
   }

   /**
    *
    * @returns the Default Address "No" radio button on the Add Address page
    */
   getDefaultAddressNo() {
      return cy.get('input[type="radio"][value="0"]');
   }

   /**
    *
    * @returns the Back button on the Add Address page
    */
   getBackBtn() {
      return cy.get('div.pull-left a.btn-default');
   }

   /**
    *
    * @returns the Continue button on the Add Address page
    */
   getContinueBtn() {
      return cy.get('input[value="Continue"]');
   }
}

export default AddressBookElements;
