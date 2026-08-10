function ProductCard({ addToCart }) {
  return (
    <div>
      <h4>Sample Product</h4>
      <p>₹499</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;