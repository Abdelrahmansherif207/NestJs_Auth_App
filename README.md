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

### 1. **Sign-Up Page**

![Sign-Up UI Example](screenshot/signup)

- Users can register with their email, password, full name, phone number, and age.
- A successful registration will return a JWT token.

### 2. **Sign-In Page**

![Sign-In UI Example](https://via.placeholder.com/600x300?text=Sign-In+Page+Example)

- Users can sign in with their email and password.
- On successful sign-in, a JWT token is returned for accessing protected routes.

### 3. **Profile Page**

![Profile UI Example](https://via.placeholder.com/600x300?text=Profile+Page+Example)

- After sign-in, users can view their profile information.
- Users can update their information or view other users' profiles.

