import { useState } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

function UserState() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Champ", age: 17 },
    { id: 2, name: "Alex", age: 20 },
    { id: 3, name: "John", age: 22 },
  ]);

  function addUser() {
    setUsers([
      ...users,
      { id: 4, name: "David", age: 25 },
    ]);
  }

  function removeUser(id: number) {
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <div>
      <h2>Users</h2>

      <button onClick={addUser}>Add User</button>

      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>

          <button onClick={() => removeUser(user.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default UserState;