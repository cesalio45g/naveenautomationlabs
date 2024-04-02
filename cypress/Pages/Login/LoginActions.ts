import LoginElements from './LoginElements';
const loginElements = new LoginElements();

class LoginActions {
   /**
    *
    * Will enter the string "email" into the email field of the login page
    * @param { string } email
    */
   enterEmailAddress(email: string) {
      loginElements.getEmailField().clear().type(email);
   }

   /**
    *
    * Will enter the string "password" into the password field of the login page
    * @param { string } password
    */
   enterPassword(password: string) {
      loginElements.getPasswordField().clear().type(password);
   }

   /**
    * Will click on the "Forgot Password" link, under the password field
    */
   clickForgotPasswordLink() {
      loginElements.getForgotPasswordLink().click();
   }

   /**
    * Will click on the "Login" button and submit the credentials information to Log In
    */
   clickLoginBtn() {
      loginElements.getLoginBtn().click();
   }
}

export default LoginActions;
