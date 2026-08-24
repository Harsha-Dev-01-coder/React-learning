import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(response.data);
      } catch {
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>Name: {user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Users;