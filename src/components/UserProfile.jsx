import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserProfile() {
  const { user, setUser } = useContext(UserContext);

  function handleChangeRole() {
    setUser({
      ...user,
      role:
        user.role === "Frontend Developer"
          ? "Full Stack Developer"
          : "Frontend Developer",
    });
  }

  return (
    <div className="user-card">
      <h2>User Profile</h2>

      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>

      <button onClick={handleChangeRole}>Change Role</button>
    </div>
  );
}

export default UserProfile;
