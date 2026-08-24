import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  return (
    <main>
      <h1>User Details</h1>

      <h2>User ID: {id}</h2>
    </main>
  );
}

export default UserDetails;