# naveenautomationlabs

============================================
Nuveen Automation Labs is a demo shopping cart I found online to practice Cypress Automation. See: https://naveenautomationlabs.com/opencart/index.php?route=account/login

The main reason is to validate integration between my automation scripts, GitHub Actions and Cypress Cloud integration. See: https://learn.cypress.io/tutorials/running-our-tests-in-parallel-with-cypress-dashboard for more information on Cypress Cloud configuration with GitHub.

============================================
There are 3 test suites which are divided into 2 containers (2 run instances) so that execution time is faster than running on 1 container instance. See: https://cloud.cypress.io/projects/ckgy26/runs (Private mode may be on)

============================================
This project uses:

-  Typescript format
-  Custom Commands (doLogin, doLogout)
-  Cypress environment variables - hidden using GitHub Secrets and cypress.env.json file
-  cypress mochawesome reporters - reports we can see when we run locally (but now we have integrated cloud)
-  cypress grep - used in the event we want to run only "negative" test cases
   \*\*\*$> npx cypress run --env grepTags=@negative
-  Parallet testing using GitHub Actions and Cypress Cloud (2 containers)
