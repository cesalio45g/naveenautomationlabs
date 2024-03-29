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
      pageElements.getLastNameField().clear().type(lname);
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
    * This will check the 'yes' subscribe radio button
    */
   subscribeNews() {
      pageElements.getSubscribeNews().check();
   }

   /**
    *
    * This will check the 'no' subscribe radio button
    */
   unsubscribeNews() {
      pageElements.getUnsubscribeNews().check();
   }

   /**
    *
    * Selects the privacy policy checkbox
    */
   checkPrivacyCheckbox() {
      pageElements.getPrivacyCheckbox().check();
   }

   /**
    *
    * Unselects the privacy policy checkbox
    */
   uncheckPrivacyCheckbox() {
      pageElements.getPrivacyCheckbox().uncheck();
   }

   /**
    *
    * Clicks the 'Confirm' button (aka Select)
    */
   clickSubmit() {
      pageElements.getSubmitBtn().click();
   }

   /**
    *
    * @param {object} user
    * Takes in the user object and fills in the registration form with approprate data
    */
   enterUserRegistrationInfo({
      user: { firstname, lastname, email, telephone, password, subscribe },
   }) {
      this.enterFirstName(firstname);
      this.enterLastName(lastname);
      this.enterEmail(email);
      this.enterTelephone(telephone);
      this.enterPassword(password);
      this.enterConfirmPassword(password);
      // privacy policy checkbox is un-selected by default
      this.checkPrivacyCheckbox();
   }

   clearUserRegistrationInfo() {
      pageElements.getFirstNameField().clear();
      pageElements.getLastNameField().clear();
      pageElements.getEmailField().clear();
      pageElements.getTelephoneField().clear();
      pageElements.getPasswordField().clear();
      pageElements.getConfirmPasswordField().clear();
      this.uncheckPrivacyCheckbox();
   }
}

export default RegistrationActions;
