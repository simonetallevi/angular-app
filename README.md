# AngularApp
This project provides a simple guide of how to deploy and angular application on AWS S3.

```generated with Angular CLI version 9.1.7.```

## Deployment steps
To deploy the application follow the steps belows:

### 0. System requirements

Make sure to have:
 - [nodeJs](https://nodejs.org/en/download/)
 - [angular-cli](https://angular.io/cli)  
 - [AWS cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)

installed on you machine. 
After installing the AWS CLI yuo will need to configure it 
by following these [steps](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html).

### 1. Run the application locally

- Run `npm install` to install all required dependencies
- Run `ng serve` for a dev server.
- Navigate to `http://localhost:4200/` and check the app is working

## 3. Create a new bucket for the application

## 2. Build the project

 - Run `ng build --prod` to build the project (Use the `--prod` flag for a production build). 
 - The build artifacts will be stored in the `dist/` directory.
