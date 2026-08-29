import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchUsers,
  addUser,
  deleteUser
} from "../store/slices/userSlice";

function ReduxUsers() {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector(
    (state) => state.users
  );

  // FETCH USERS WHEN COMPONENT LOADS
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // ADD USER
  const handleAddUser = () => {
    dispatch(
      addUser({
        name: "Champ",
        email: "champ@example.com"
      })
    );
  };

  // DELETE USER
  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <h2>Users</h2>

      <button onClick={handleAddUser}>
        Add User
      </button>

      {loading && <p>Loading users...</p>}

      {error && <p>Error: {error}</p>}

      {!loading && users.length === 0 && (
        <p>No users found.</p>
      )}

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>

          <button onClick={() => handleDeleteUser(user.id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default ReduxUsers;