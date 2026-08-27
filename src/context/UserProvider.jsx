import { useState } from "react";
import UserContext from "./UserContext";

function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Champ",
    role: "Frontend Developer",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;