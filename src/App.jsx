import "./App.css";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([]);

  function handleAddToCart(product) {
    setCart((previousCart) => [
      ...previousCart,
      {
        ...product,
        cartId: Date.now() + Math.random(),
      },
    ]);
  }

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route
          path="/"
          element={
           <Home
  onAddToCart={handleAddToCart}
  setProductsFromHome={setProducts}
/>
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              products={products}
              onAddToCart={handleAddToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

