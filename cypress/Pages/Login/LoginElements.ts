class LoginElements {
   /**
    *
    * @returns the email input field
    */
   getEmailField() {
      return cy.get('input[name="email"]');
   }

   /**
    *
    * @returns the password input field
    */
   getPasswordField() {
      return cy.get('input[name="password"]');
   }

   /**
    *
    * @returns the "forgotten password" link, just under the password field
    */
   getForgotPasswordLink() {
      return cy.get('input ~ a[href*="forgotten"]');
   }

   /**
    *
    * @returns the Login button
    */
   getLoginBtn() {
      return cy.get('input[type="submit"][value="Login"]');
   }
}

export const sideNavMenuItems = [
   'Login',
   'Register',
   'Forgotten Password',
   'My Account',
   'Address Book',
   'Wish List',
   'Order History',
   'Downloads',
   'Recurring payments',
   'Reward Points',
   'Returns',
   'Transactions',
   'Newsletter',
];

export default LoginElements;
