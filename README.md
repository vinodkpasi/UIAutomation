# UIAutomation
This repo provides ready to use features for Cypress Automation.
### Features
* Prettier integration
* ESLint integration 
* Tagging 
* Mochawesome individual suite report generation
* Mochawesome all-in one suite report generation
* File upload plugin integration 
* Xpath plugin integration 
* POM Example
* Application exception handling 
* Drag and Drop plugin integration 
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