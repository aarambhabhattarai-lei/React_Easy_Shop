function Cart({ cart }) {
  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty.</h2>
          <p>Add some products to get started.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((product) => (
              <div className="cart-item" key={product.cartId}>
                <img src={product.image} alt={product.title} />

                <div>
                  <h3>{product.title}</h3>
                  <p>${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total: ${total.toFixed(2)}</h2>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;

