class Registration {
   /**
    *
    * @returns first name input field from Registration page
    */
   getFirstNameField() {
      return cy.get('input[name="firstname"]');
   }

   /**
    *
    * @returns last name input field from Registration page
    */
   getLastName() {
      return cy.get('input[name="lastname"]');
   }

   /**
    *
    * @returns email input field from Registration page
    */
   getEmailField() {
      return cy.get('input[name="email"]');
   }

   /**
    *
    * @returns telephone input field from Registration page
    */
   getTelephoneField() {
      return cy.get('input[name="telephone"]');
   }

   /**
    *
    * @returns password input field from Registration page
    */
   getPasswordField() {
      return cy.get('input[name="password"]');
   }

   /**
    *
    * @returns confirm password input field from Registration page
    */
   getConfirmPasswordField() {
      return cy.get('input[name="confirm"]');
   }

   /**
    *
    * @param {string} value
    * @returns newsletter radio button from Registration page
    */
   getSubscribeRadio(value) {
      return cy.get(
         'input[type="radio"][name="newsletter"][value="' + value + '"]'
      );
   }

   /**
    *
    * @returns privacy policy checkbox from Registration page
    */
   getPrivacyCheckbox() {
      return cy.get('input[type="checkbox"][name="agree"]');
   }

   /**
    *
    * @returns Continue (aka: submit) button from Registration page
    */
   getSubmitBtn() {
      return cy.get('input[type="submit"]');
   }
}

export default Registration;
