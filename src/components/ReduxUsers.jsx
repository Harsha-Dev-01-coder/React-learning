import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../store/slices/userSlice";

function ReduxUsers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const {
    users,
    loading,
    error
  } = useSelector((state) => state.users);

  return (
    <div>
      <h2>Users</h2>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default ReduxUsers;