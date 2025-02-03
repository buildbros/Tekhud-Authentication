# Authentication Service

## Overview

The Authentication Service is responsible for managing user authentication and authorization within the application. It provides secure login, registration, and token management functionalities.

## Features

- User registration
- User login
- Token-based authentication
- Password reset
- User role management

## Installation

To install the Authentication Service, follow these steps:

1. Clone the repository:
    ```bash
    git clone git@github.com:buildbros/Tekhud-Authentication.git

    ```
2. Navigate to the Authentication directory:
    ```bash
    cd tekhud-services/Authentication
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

To start the Authentication Service, run the following command:
```bash
npm start
```

## API Endpoints

### User Registration

- **Endpoint:** `/api/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
    ```json
    {
        "username": "string",
        "password": "string",
        "email": "string"
    }
    ```

### User Login

- **Endpoint:** `/api/login`
- **Method:** `POST`
- **Description:** Authenticates a user and returns a token.
- **Request Body:**
    ```json
    {
        "username": "string",
        "password": "string"
    }
    ```

### Password Reset

- **Endpoint:** `/api/reset-password`
- **Method:** `POST`
- **Description:** Resets the user's password.
- **Request Body:**
    ```json
    {
        "email": "string"
    }
    ```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please contact [support@tekhud.com](mailto:support@tekhud.com).