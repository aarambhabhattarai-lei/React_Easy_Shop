import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.image} alt={product.title} />

        <h3>{product.title}</h3>

        <p className="category">{product.category}</p>

        <p className="price">${product.price.toFixed(2)}</p>

        <p className="rating">
          ⭐ {product.rating?.rate || "N/A"}
        </p>
      </Link>

      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
    }),
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;

