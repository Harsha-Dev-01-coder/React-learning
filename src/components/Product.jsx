function Products() {
  const products = [
    {
      id: 1,
      name: "Keyboard",
      price: 1999,
    },
    {
      id: 2,
      name: "Mouse",
      price: 999,
    },
    {
      id: 3,
      name: "Monitor",
      price: 12999,
    },
  ];

  const sortedProducts = [...products].sort(
    (a, b) => a.price - b.price
  );

  return sortedProducts.map((product) => (
    <div key={product.id}>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  ));
}

export default Products;