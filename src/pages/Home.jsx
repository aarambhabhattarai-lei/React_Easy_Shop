import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";

function Home({ onAddToCart, setProductsFromHome }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }

        const data = await response.json();

        setProducts(data);
        setProductsFromHome(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [setProductsFromHome]);

  function handleAddProduct(newProduct) {
    setProducts((previousProducts) => {
      const updatedProducts = [
        newProduct,
        ...previousProducts,
      ];

      setProductsFromHome(updatedProducts);

      return updatedProducts;
    });
  }

  let displayedProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (sort === "low-high") {
    displayedProducts = [...displayedProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high-low") {
    displayedProducts = [...displayedProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  return (
    <main className="home">
      <section className="hero">
        <h1>Welcome to ShopEasy</h1>
        <p>Find products you love at great prices.</p>
      </section>

      <ProductForm onAddProduct={handleAddProduct} />

      <section className="products-section">
        <div className="controls">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort Products</option>
            <option value="low-high">
              Price: Low to High
            </option>
            <option value="high-low">
              Price: High to Low
            </option>
          </select>
        </div>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        )}

        {error && (
          <div className="error-box">
            <h3>Something went wrong</h3>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <ProductList
            products={displayedProducts}
            onAddToCart={onAddToCart}
          />
        )}
      </section>
    </main>
  );
}

export default Home;


