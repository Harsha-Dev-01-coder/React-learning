interface User {
  name: string;
  email: string;
  age: number;
}

const user: User = {
  name: "Champ",
  email: "champ@example.com",
  age: 17
};

function updateUser(updates: Partial<User>) {
    console.log(updates);
}

updateUser({
    age: 18
});