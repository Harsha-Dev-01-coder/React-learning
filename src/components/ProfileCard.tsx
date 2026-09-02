interface UserCardProps {
  name: string;
  age: number;
  bio?: string;
}

function UserCard({ name, age, bio }: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {bio && <p>{bio}</p>}
    </div>
  );
}

function App() {
  return (
    <UserCard
      name="Champ"
      age={17}
    />
  );
}

export default App;