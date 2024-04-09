/// <reference types="cypress" />

declare namespace Cypress {
   interface Chainable<Subject = any> {
      doLogin(email: string, password: string): Chainable<any>;
      doLogout(): Chainable<any>;
   }
}
