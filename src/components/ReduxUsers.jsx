import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchUsers,
  addUser,
  deleteUser,
  selectUsers,
  selectUsersLoading,
  selectUsersAdding,
  selectUsersError
} from "../store/slices/userSlice";


function ReduxUsers() {

  const dispatch = useDispatch();

  // Get data from Redux
  const users = useSelector(selectUsers);
  const loading = useSelector(selectUsersLoading);
  const adding = useSelector(selectUsersAdding);
  const error = useSelector(selectUsersError);

  // Local state for the form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  // FETCH USERS WHEN COMPONENT LOADS
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  // ADD USER
  const handleAddUser = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      return;
    }

    dispatch(
      addUser({
        name,
        email
      })
    );

    setName("");
    setEmail("");
  };

  // DELETE USER
  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <h2>User Manager</h2>

      <p>Total Users: {users.length}</p>

      {/* ADD USER FORM */}

      <form onSubmit={handleAddUser}>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" disabled={adding}>
          {adding ? "Adding..." : "Add User"}
        </button>

        {error && (
          <button onClick={() => dispatch(fetchUsers())}>
            Retry
          </button>
        )}

      </form>

      {/* ERROR */}

      {error && (
        <p>
          Error: {error}
        </p>
      )}

      {/* LOADING */}

      {loading && (
        <p>
          Loading users...
        </p>
      )}

      {/* USERS */}

      {!loading && users.length === 0 && (
        <p>
          No users found.
        </p>
      )}

      {!loading && users.length > 0 && (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <h3>
                {user.name}
              </h3>

              <p>
                {user.email}
              </p>

              <button
                onClick={() => handleDeleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default ReduxUsers;