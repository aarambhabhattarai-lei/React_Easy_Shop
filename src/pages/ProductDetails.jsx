
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails({ products, onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id.toString() === id
  );

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product Not Found</h2>
        <button onClick={() => navigate("/")}>
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <main className="details-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="details-card">
        <img src={product.image} alt={product.title} />

        <div className="details-info">
          <p className="category">{product.category}</p>

          <h1>{product.title}</h1>

          <p className="details-price">
            ${product.price.toFixed(2)}
          </p>

          <p>⭐ {product.rating?.rate || "N/A"}</p>

          <p className="description">
            {product.description ||
              "No description available for this product."}
          </p>

          <button onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;

