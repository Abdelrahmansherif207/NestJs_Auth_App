<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Description

This project is a **NestJS-based backend** application designed for building a scalable and efficient user authentication system. It includes functionality for user sign-up, sign-in, and user management with basic features such as profile retrieval and listing of other users.

It uses **JWT (JSON Web Token)** for securing API endpoints and is equipped with a validation system using `class-validator` to ensure that input data is in the correct format.

The project also includes **Swagger API documentation** for easy interaction with the backend through an intuitive UI.

### Features:
- User Registration (Sign-up)
- User Authentication (Sign-in)
- JWT Authentication
- User Profile Management
- Data Validation using `class-validator`
- Scalable and extensible structure
- Swagger UI for interactive API documentation

## UI Examples

Below are some UI examples to demonstrate how the application interacts with the user:
### 1. **Signup Conflict**
   - **Description**: This screenshot shows an error when a user tries to sign up with an email that's already registered in the system.
   - ![Signup Conflict](./screenshots/signup-conflict.png)

### 2. **Successful Signup**
   - **Description**: This screenshot shows the successful creation of a user account during the signup process.
   - ![Successful Signup](./screenshots/signup.png)

### 3. **SignUp DTO Validation**
   - **Description**: This screenshot shows the validation error when a user tries to sign up with invalid data. The API returns an error due to improper request formatting.
   - ![SignUp DTO Validation](./screenshots/signDto-validation.png)

### 4. **Signin with Incorrect Credentials**
   - **Description**: This screenshot demonstrates an invalid login attempt with incorrect credentials, resulting in an error message.
   - ![Signin Wrong](./screenshots/signin-wrong.png)

### 5. **Successful Signin**
   - **Description**: This screenshot shows a successful login where the user is authenticated and granted access to the system.
   - ![Successful Signin](./screenshots/signin.png)

### 6. **Unauthorized Access**
   - **Description**: This screenshot demonstrates an error message that appears when trying to access a protected route without proper authorization (e.g., missing or invalid token).
   - ![Unauthorized Access](./screenshots/unauth.png)

### 7. **Profile Request Success**
   - **Description**: This screenshot shows a successful request for fetching the user's profile information.
   - ![Profile Request Success](./screenshots/profile.png)

### 8. **Get All Users (Excluding Current User)**
   - **Description**: This screenshot shows the list of all users retrieved from the system, excluding the current user.
   - ![Get All Users](./screenshots/users.png)

### 9. **Swagger Documentation**
   - **Description**: This screenshot shows the interactive Swagger UI for exploring the available API endpoints, testing requests, and understanding the API structure.
   - ![Swagger UI](./screenshots/swagger.png)
