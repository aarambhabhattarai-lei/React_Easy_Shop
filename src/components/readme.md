# ShopEasy - React JS Assessment

A simple shopping website built using React.js and Vite. This project was created as part of the React JS Assignment-Based Assessment.

## Features

### Product Cards

* Displays products in a clean card layout.
* Each product shows its name, price, image, category, and rating.
* Product cards use props.
* PropTypes are used for prop validation.
* Products are rendered using `.map()`.

### Shopping Cart

* Users can add products to the cart.
* The cart count is displayed in the navigation bar.
* A separate Cart page displays the products added to the cart.
* The total cart price is calculated automatically.

### Search and Sort

* Search products by typing their name.
* Sort products by:

  * Price: Low to High
  * Price: High to Low

### API Data Fetching

* Product data is fetched from the Fake Store API.
* `useEffect` is used to fetch data when the application loads.
* A loading spinner is displayed while products are loading.
* An error message is displayed if the API request fails.

API used:

https://fakestoreapi.com/products

### Add New Product

* Users can add their own product through a controlled form.
* Form fields include:

  * Product Name
  * Price
  * Image URL
  * Category
* Validation is included for required fields.
* Price must be a positive number.
* Image URL must be valid.
* New products are added to the beginning of the product list without refreshing the page.

### Routing

The application uses React Router.

Available routes:

* `/` - Product List
* `/product/:id` - Product Details
* `/cart` - Shopping Cart
* `*` - 404 Not Found page

## Technologies Used

* React.js
* Vite
* JavaScript
* React Hooks
* React Router DOM
* PropTypes
* CSS
* Fake Store API

## Project Structure

```text
react-assessment-aarambha/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductForm.jsx
│   │   └── ProductList.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md
```

## How to Run the Project

### 1. Clone or download the project

Open the project folder in VS Code.

### 2. Install dependencies

Open the terminal inside the project folder and run:

```bash
npm install
```

### 3. Start the development server

Run:

```bash
npm run dev
```

### 4. Open the application

Vite will provide a local URL similar to:

```text
http://localhost:5173/
```

Open the URL in a web browser.

## Assumptions

* The project uses the Fake Store API for product data.
* Internet access is required to load products from the API.
* Products added through the form are stored only in the application's current state and are not saved to a database.
* Cart data is also stored in React state and will reset when the application is refreshed.
* Product images are provided using image URLs.

## React Concepts Used

This project demonstrates:

* Functional Components
* Props
* PropTypes
* `useState`
* `useEffect`
* Event Handling
* Controlled Components
* Conditional Rendering
* Array `.map()`
* Array `.filter()`
* Array `.sort()`
* React Router
* Form Validation
* API Fetching

## Author

Aarambha
