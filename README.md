# UIAutomation
This repo provides ready to use features for Cypress Automation.
### Features
* Prettier integration-Formatting
* ESLint integration-Code quality 
* Tagging 
* Report generation
* File upload plugin integration 
* Xpath plugin integration 
* POM example
* Fluent API 
* Exception handling 
* Drag and drop plugin integration 
* Custom command for download verification 
* Custom command for browser popup window
* Custom command for javascript popup box
* Custom command for browser page viewsource
* Custom command for checking broken links
* Custom command for browser tab
* Custom command for HTML5 video
* TypeScript configuration
* Production environment support 
* Retry feature 
* Incognito mode
* IFrame Support
* Clipboard functionality
* Allure report(Single file)


# Installation
Run the below command to setup the repository

**npm install**

# Editor
VSCode

# VSCode Extension 
[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

# Execution  
**npx cypress run**

  **OR**

**npx cypress open**

# Features details
### TypeScript configuration
This repo is configured for TypeScript. You can use the **tsconfig.json** file to chnage the typescript configuration.

### Production environment support 
To support the production environment **production.config.js** file can be used. Run the below command to use this file.
  
**npx cypress run --config-file production.config.js**

  **OR**

**npx cypress open --config-file production.config.js**

### Download verfication
You can use the custom command **verifyDownload** to verify the downloaded file(based on [cy-verify-downloads](https://www.npmjs.com/package/cypress-xpath) plugin). For use case example refer [downloadVerfication.cy.ts](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/e2e/specs/miscellaneous/downloadVerfication.cy.ts) spec.

### Broken links verfication
You can use the custom command **verifyBrokenLinks** to verify the broken links. For use case example refer [brokenLinks.spec.cy.ts](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/e2e/specs/miscellaneous/brokenLinks.spec.cy.ts) spec.

### Browser popup window helper
You can use the custom command **switchToWindow** to switch to the browser popup window. For use case example refer [browserPopupWindow.cy.ts](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/e2e/specs/miscellaneous/browserPopupWindow.cy.ts) spec.

### Browser page viewsource helper
You can use the custom command **viewsource** to get the current browser page viewsource. For use case example refer [viewsource.spec.cy.ts](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/e2e/specs/miscellaneous/viewsource.spec.cy.ts) spec.

### Drag and drop plugin integration 
To support the drag and drop functionality  [@4tw/cypress-drag-drop](https://www.npmjs.com/package/@4tw/cypress-drag-drop) plugin is configured. For use case example refer [dragDrop.spec.cy.ts](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/e2e/specs/miscellaneous/dragDrop.spec.cy.ts) spec.

### XPath plugin integration 
To support the xpath locator [cypress-xpath](https://www.npmjs.com/package/cypress-xpath) plugin is configured. For use case example refer [xpath.spec.cy.ts](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/e2e/specs/miscellaneous/xpath.spec.cy.ts) spec.

### File upload plugin integration  
To support the file upload [cypress-file-upload](https://www.npmjs.com/package/cypress-file-upload) plugin is configured. For use case example refer [xpath.spec.cy.ts](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/e2e/specs/miscellaneous/upload.spec.cy.ts) spec.

### Exception handling 
By default, any type of uncaught exception is handled for the application exception. Refer [commands.js](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/support/commands.js) file.

### Report generation 
After execution Mochawesome report is generated  in the **cypress/reports** directory. By default, html report file is generated for each test suite. To merge all html report files into one html report file named **mergereport.html**  you can run below command.

**npm run mergereport**

Below is the screenshot for the same.
![Screenshot](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/images/mergereport.png "This is a sample report screenshot.")

### Prettier integration-Formatting
To support the code fomatting and rules check prettier is configured. You need to install the [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) VSCode extension. If you save the typescript file code will be auto-formatted. 

### ESLint integration-Code quality 
To support the coding coding standard and cypress standard eslint is configured.
Run the below command to find the eslint/prettier issue.

  **npm run finderrors**

Run the below command to fix the auto-fixable issue.

  **npm run fixerrors**

### Tagging 
To support the tagging [cypress-grep](https://www.npmjs.com/package/cypress-grep) plugin is configured. For use case example refer [tags.spec.cy.ts](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/e2e/specs/miscellaneous/tags.spec.cy.ts) spec.

Use the 'grep' environment variable to run the specs based on title text.

  **npx cypress run --env grep='Xpath test'**

Use the 'grepTags' environment variable to run the specs based on the tag name.

  **npx cypress run --env grepTags='config'**

Both environment variables are also defined inside the config file(env section) you just need to specify the value so don't need to pass on the command-line.

### Retry feature 
By default, retry feature is enabled inside the config file for 'cypress run' command with count 2.

### Data-driven example 
For use case example refer [login.spec.cy.ts](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/e2e/specs/login/login.spec.cy.ts) spec.

### POM example 
For use case example refer [login.spec.cy.ts](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/e2e/specs/login/login.spec.cy.ts) spec.

### Fluent API 
For use case example refer [login.spec.cy.ts](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/e2e/specs/login/login.spec.cy.ts) spec.

### Incognito mode
You can use use the 'incognito' environment variable to run the chrome/electron/firefox/edge browser to run in the inconito mode. You can define the value using CLI mode or through config file(env/incgnito key) directly.

  **npx cypress run --env incognito=true**

### IFrame Support
You can use the custom command **switchToIframe** to switch to the iframe. For use case example refer [iframe.spec.cy.ts](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/e2e/specs/miscellaneous/iframe.spec.cy.ts) spec.

### JavaScript popup box
Coming soon...

### HTML5 Video Helper
Coming soon...

### Tab helper
Coming soon...

### Web Table Helper
Coming soon...

### API testing example 
Coming soon...

### Visual testing example
Coming soon...

### Jenkins integration 
Coming soon...

### Clipboard functionality
Coming soon...

### Allure report(Single file)
