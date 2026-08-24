import { NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function Products() {

  const [ SearchParams ] = useSearchParams();

  const category = SearchParams.get("category");
  const sort = SearchParams.get("sort");

  return (
    <main>
      <h1>Products</h1>

      <p>Category: {category}</p>
      <p>Sort: {sort}</p>

      <p>Select a product:</p>

      <ul>
        <li>
          <NavLink to="/products/1">
            Product 1
          </NavLink>
        </li>

        <li>
          <NavLink to="/products/2">
            Product 2
          </NavLink>
        </li>

        <li>
          <NavLink to="/products/3">
            Product 3
          </NavLink>
        </li>
      </ul>
    </main>
  );
}

export default Products;