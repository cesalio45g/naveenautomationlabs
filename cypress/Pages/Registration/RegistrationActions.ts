import PageElements from './RegistrationElements';
const pageElements = new PageElements();

class RegistrationActions {
   /**
    *
    * @param {string} fname
    * Clears the input field, then types the value found in 'fname'
    */
   enterFirstName(fname: string) {
      pageElements.getFirstNameField().clear().type(fname);
   }

   /**
    *
    * @param {string} lname
    * Clears the input field, then types the value found in 'lname'
    */
   enterLastName(lname: string) {
      pageElements.getLastName().clear().type(lname);
   }

   /**
    *
    * @param {string} email
    * Clears the input field, then types the value found in 'email'
    */
   enterEmail(email: string) {
      pageElements.getEmailField().clear().type(email);
   }

   /**
    *
    * @param {string: string} telephone
    * Clears the input field, then types the value found in 'telephone'
    */
   enterTelephone(telephone) {
      pageElements.getTelephoneField().clear().type(telephone);
   }

   /**
    *
    * @param {string: string} password
    * Clears the input field, then types the value found in 'password'
    * This should be a hidden value from all logging
    */
   enterPassword(password: string) {
      pageElements.getPasswordField().clear().type(password);
   }

   /**
    *
    * @param {string} password
    * Clears the input field, then types the value found in 'confirm password'
    * This should be a hidden value from all logging
    */
   enterConfirmPassword(password: string) {
      pageElements.getConfirmPasswordField().clear().type(password);
   }

   /**
    *
    * @param {string} value
    * This is a 1 or 0 value
    * This will check the 'yes' or 'no' subscribe radio button
    */
   toggleSubscribe(value: string) {
      pageElements.getSubscribeRadio(value).check();
   }

   /**
    *
    * Selects or unselects the privacy policy checkbox
    */
   enterPrivacycheckbox() {
      pageElements.getPrivacyCheckbox().check();
   }

   /**
    *
    * Clicks the 'Confirm' button (aka Select)
    */
   clickSubmit() {
      pageElements.getSubmitBtn().click();
   }

   enterUserRegistrationInfo({
      user: { firstname, lastname, email, telephone, password, subscribe },
   }) {
      this.enterFirstName(firstname);
      this.enterLastName(lastname);
      this.enterEmail(email);
      this.enterTelephone(telephone);
      this.enterPassword(password);
      this.enterConfirmPassword(password);
   }
}

export default RegistrationActions;
