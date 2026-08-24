function ProductCard({ addToCart }) {
  return (
    <div>
      <h2>Keyboard</h2>

      <p>₹1999</p>

      <button onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;