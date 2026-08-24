import {
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <main>
      <h1>Product Details</h1>

      <h2>Product ID: {id}</h2>

      <button onClick={() => navigate(-1)}>
        Go Back
      </button>

      <br />

      <Link to="/products">
        Back to Products
      </Link>
    </main>
  );
}

export default ProductDetails;