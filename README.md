# NESTJS-POSTGRES-TYPEORM USED CAR PRICING API
This RESTful API is developed with NestJS, TypeORM, and PostgreSQL. User authentication is handled through cookie sessions.

The API facilitates managing prices for pre-owned vehicles. Users have the ability to submit reports on sold cars, and the application can then calculate an estimated average price for a vehicle based on these submitted reports

## Table of Contents
- [Technologies](#technologies)
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [API Documentation](#api-documentation)

## Technologies
- **NestJS Framework**: Efficient and scalable architecture for building server-side applications.
- **TypeORM**: Elegant ORM for working with MySQL databases.
- **Authentication**: Secure authentication using cookie sessions.
- **Testing**: Comprehensive unit and e2e tests to ensure code quality and functionality.
- **Docker**: A containerization platform that allows for easy deployment and scaling of applications.

## Features
- **Create and manage profile**: Easily create new user profile, update details, and delete as needed.
- **Add reports about sold cars**: Authenticate and submit reports on sold cars.
- **Get estimate**:  Get an estimated average price for a car based on approved reports.


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Node.js
- npm or yarn
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Installation
Clone the repository:

```bash
git clone https://github.com/bohdanadev/nestjs-postgres-typeorm-used-car-pricing-api

cd nestjs-postgres-typeorm-used-car-pricing-api
```

Install the dependencies:

```bash
npm install

```

### Configuration
Create .env.development and .env.test files in the root directory and add the following configuration variables:

```.env
POSTGRES_DB=car-pricing
POSTGRES_USER=admin
POSTGRES_PASSWORD=password
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
DB_LOGGING=false
COOKIE_KEY=test
APP_PORT=3000
```

### Running the Application


1. Launch Docker Containers for the Database: Run the command below in the terminal to start the PostgreSQL Docker container and pgAdmin container in the background

```bash
docker-compose up
```
The pgAdmin for database managing will be running at http://localhost:5050.

2. Database Migrations: Run migration commands in the terminal to set up the database:

```bash
npm run migration:generate -name=initialMigration

# then

npm run migration:run

```

3. Run the app.

```bash
npm run start

```
The application will be running at http://localhost:3000.

### Testing

Run unit tests:

```bash
npm run test

```

Run e2e tests:

```bash
npm run test:e2e

```

### API Documentation
The REST API documentation is available at http://localhost:3000/docs. It provides detailed information on the available endpoints, request/response structures, and authentication methods.
