# Product Listing Application

A React-based Product Listing Application built using **React**, **React Router**, **Context API**, and the **DummyJSON API**.

## Features

### Product Listing Page

* Display products in a responsive grid layout
* Product cards showing:

  * Product image
  * Product title
  * Price
  * Rating
  * Pagination support

### Product Detail Page

* Detailed product information
* Product image
* Product title
* Price
* Rating
* Brand
* Category
* Stock information
* Description
* Back navigation

### Filters

* Category filter (multi-select)
* Brand filter (multi-select)
* Price range filter
* Apply button for price filtering

### State Management

* React Context API
* Shared filter state across components

### Routing

* React Router DOM
* Dynamic route:

  * `/`
  * `/product/:id`

---

## Tech Stack

* React
* Vite
* React Router DOM
* Context API
* Axios
* DummyJSON API

---

## API Endpoints

### Get Products

```http
GET https://dummyjson.com/products
```

### Get Product By ID

```http
GET https://dummyjson.com/products/:id
```

### Get Categories

```http
GET https://dummyjson.com/products/categories
```

### Get Products By Category

```http
GET https://dummyjson.com/products/category/:category
```

---

## Project Structure

```text
src/
│
├── api/
│   └── productApi.js
│
├── components/
│   ├── Header.jsx
│   ├── Filters.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   └── Pagination.jsx
│
├── context/
│   └── ProductContext.jsx
│
├── pages/
│   ├── ProductListing.jsx
│   └── ProductDetail.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd product-listing-app
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build Project

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Filter Functionality

### Category Filter

Products can be filtered by one or more categories.

### Brand Filter

Products can be filtered by one or more brands.

### Price Filter

Users can enter minimum and maximum prices and click the **Apply** button to filter products.

---

## Future Improvements

* Search functionality
* Product sorting
* Skeleton loaders
* Error handling UI
* Unit testing
* Dark mode support

---

## Author

Shrestha Raj
