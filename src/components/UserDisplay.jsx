import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserDisplay() {
  const { user } = useContext(UserContext);

  return (
    <div className="user-card">
      <h2>User Display</h2>
      <p>User: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default UserDisplay;
