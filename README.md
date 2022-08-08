# UIAutomation
This repo provides ready to use features for Cypress Automation.
### Features
* Prettier integration-Formatting
* ESLint integration-Code quality 
* Tagging 
* Report generation
* File upload plugin integration 
* Xpath plugin integration 
* POM Example
* Exception handling 
* Drag and drop plugin integration 
* Custom command for download verification 
* TypeScript configuration
* Production environment support 
* Retry feature enabled

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
You can use the custom command **verifyDownload** to verify the downloaded file(based on [cy-verify-downloads](https://www.npmjs.com/package/cypress-xpath) plugin). For use case example refer [downloadVerfication.cy.ts](https://github.com/vinodkpasi/UIAutomation/blob/b9a7febd915576d40c8a3c1d7b62e1f47ce46cbb/cypress/e2e/examples/downloadVerfication.cy.ts#L23) spec.

### Drag and drop plugin integration 
To support the drag and drop functionality  [@4tw/cypress-drag-drop](https://www.npmjs.com/package/@4tw/cypress-drag-drop) plugin is configured. For use case example refer [dragDrop.spec.cy.ts](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/e2e/examples/dragDrop.spec.cy.ts) spec.

### XPath plugin integration 
To support the xpath locator [cypress-xpath](https://www.npmjs.com/package/cypress-xpath) plugin is configured. For use case example refer [xpath.spec.cy.ts](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/e2e/examples/xpath.spec.cy.ts) spec.

### File upload plugin integration  
To support the file upload [cypress-file-upload](https://www.npmjs.com/package/cypress-file-upload) plugin is configured. For use case example refer [xpath.spec.cy.ts](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/e2e/examples/upload.spec.cy.ts) spec.

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
To support the tagging [cypress-grep](https://www.npmjs.com/package/cypress-grep) plugin is configured. For use case example refer [tags.spec.cy.ts](https://github.com/vinodkpasi/UIAutomation/blob/main/cypress/e2e/examples/tags.spec.cy.ts) spec.
Use the 'grepTags' environment variable to run a specfic tag for example 'config'.

  **npx cypress run --env grepTags='config'**
