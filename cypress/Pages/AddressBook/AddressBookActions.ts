import AddressBookElements from './AddressBookElements';
const addressBookElements = new AddressBookElements();

class AddressBookActions {
   /**
    * Enters the first name within the first name field on the Add Address page
    */
   enterFirstName(firstName: string) {
      addressBookElements.getFirstNameField().clear().type(firstName);
   }

   /**
    * Enters the last name within the last name field on the Add Address page
    */
   enterLastName(lastName: string) {
      addressBookElements.getFirstNameField().clear().type(lastName);
   }

   /**
    * Enters the city name within the city field on the Add Address page
    */
   enterCompanyName(companyName: string) {
      addressBookElements.getFirstNameField().clear().type(companyName);
   }

   /**
    * Enters the Address Line 1 within the Address1 field on the Add Address page
    */
   enterAddress1(address1: string) {
      addressBookElements.getFirstNameField().clear().type(address1);
   }

   /**
    * Enters the Address Line 2 within the Address2 field on the Add Address page
    */
   enterAddress2(address2: string) {
      addressBookElements.getFirstNameField().clear().type(address2);
   }

   /**
    * Enters the City name within the city field on the Add Address page
    */
   enterCityName(city: string) {
      addressBookElements.getFirstNameField().clear().type(city);
   }

   /**
    * Enters a postal code within the postcode field on the Add Address page
    */
   enterPostalCode(postCode: string) {
      addressBookElements.getFirstNameField().clear().type(postCode);
   }

   /**
    * Selects a name value from the Country drop down on the Add Address page
    * we use the actual "name" of the option, instead of the value for readability purposes
    */
   selectCountry(country: string) {
      addressBookElements.getFirstNameField().select(country);
   }

   /**
    * Selects a name value from the Region/State drop down on the Add Address page
    * we use the actual "name" of the option, instead of the value for readability purposes
    */
   selectRegionState(regionState: string) {
      addressBookElements.getFirstNameField().select(regionState);
   }

   /**
    * Selects and clicks the Continue button on the Add Address page
    */
   clickDefaultAddressNo() {
      addressBookElements.getDefaultAddressNo().click();
   }

   /**
    * Selects and clicks the Continue button on the Add Address page
    */
   clickDefaultAddressYes() {
      addressBookElements.getDefaultAddressYes().click();
   }

   /**
    * Selects and clicks the Continue button on the Add Address page
    */
   clickBackBtn() {
      addressBookElements.getBackBtn().click();
   }

   /**
    * Selects and clicks the Continue button on the Add Address page
    */
   clickContinueBtn() {
      addressBookElements.getContinueBtn().click();
   }

   enterNewAddress(address: {
      firstName: string;
      lastName: string;
      companyName: string;
      address1: string;
      address2: string;
      city: string;
      postCode: string;
      country: string;
      regionState: string;
   }) {
      this.enterFirstName(address.firstName);
      this.enterLastName(address.lastName);
      this.enterCompanyName(address.companyName);
      this.enterAddress1(address.address1);
      this.enterAddress2(address.address2);
      this.enterCityName(address.city);
      this.enterPostalCode(address.postCode);
      this.selectCountry(address.country);
      this.selectRegionState(address.regionState);
   }
}

export default AddressBookActions;
