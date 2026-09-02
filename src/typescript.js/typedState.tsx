import { useState } from "react";

type User = {
  id: number;
  name: string;
};

function TypedState() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <>
      <button
        onClick={() => setSelectedUser({ id: 1, name: "Champ" })}
      >
        Select a user
      </button>

      <button onClick={() => setSelectedUser(null)}>
        Clear the user
      </button>

      {selectedUser && (
        <p>Selected user: {selectedUser.name}</p>
      )}
    </>
  );
}

export default TypedState;