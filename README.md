# E-Commerce

This is a full-stack MERN (MongoDB, Express, React, Node.js) e-commerce application featuring product browsing, a shopping cart, user authentication, and secure payments with Stripe.

## Features

-   **Product Catalog**: Browse products by category.
-   **Shopping Cart**: Add, update, and remove items from the cart.
-   **User Authentication**: Secure user registration and login using JWT.
-   **Stripe Integration**: Secure checkout process with Stripe Checkout and webhook confirmation.
-   **Order History**: Authenticated users can view their past orders.
-   **Responsive Design**: Built with Tailwind CSS for a great experience on all devices.

## Project Structure

```
/
├── client/         # React frontend
└── server/         # Node.js/Express backend
```

## Setup and Installation

Follow these steps to get the development environment running.

### 1. Clone the Repository

```bash
git clone https://github.com/SyedImtiyaz-1/ecom-task
cd ecom-task
```

### 2. Backend Setup

Navigate to the server directory and install the dependencies.

```bash
cd server
npm install
```

### 3. Frontend Setup

Navigate to the client directory and install the dependencies.

```bash
cd client
npm install
```

### 4. Run the Application

You will need two terminals open to run both the backend and frontend servers concurrently.

-   **Terminal 1 (Backend)**:
    ```bash
    cd server
    npm run dev
    ```
-   **Terminal 2 (Frontend)**:
    ```bash
    cd client
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

## Environment Variables (`server/.env`)
The environment variables required for testing and configuration are shared already.


## Test Card Numbers

| Card Type                | Number              | CVV           | Expiry Date      |
|---------------------------|---------------------|---------------|------------------|
| Visa                     | 4242424242424242    | Any 3 digits  | Any future date  |
| Visa (Debit)             | 4000056655665556    | Any 3 digits  | Any future date  |
| Mastercard               | 5555555555554444    | Any 3 digits  | Any future date  |
| Mastercard (2-series)    | 2223003122003222    | Any 3 digits  | Any future date  |
| Mastercard (Debit)       | 5200828282828210    | Any 3 digits  | Any future date  |
| Mastercard (Prepaid)     | 5105105105105100    | Any 3 digits  | Any future date  |
| American Express         | 378282246310005     | Any 4 digits  | Any future date  |
| American Express         | 371449635398431     | Any 4 digits  | Any future date  |
| Discover                 | 6011111111111117    | Any 3 digits  | Any future date  |
| Discover                 | 6011000990139424    | Any 3 digits  | Any future date  |
| Discover (Debit)         | 6011981111111113    | Any 3 digits  | Any future date  |
| Diners Club              | 3056930009020004    | Any 3 digits  | Any future date  |
| Diners Club (14-digit)   | 36227206271667      | Any 3 digits  | Any future date  |
| BCcard / DinaCard        | 6555900000604105    | Any 3 digits  | Any future date  |
| JCB                      | 3566002020360505    | Any 3 digits  | Any future date  |
