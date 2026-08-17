import { useEffect, useState } from "react";
import { fetchUsersAndPosts } from "../services/api";

function Users() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const result = await fetchUsersAndPosts();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  if (!data) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Users: {data.users.length}</h2>
      <h2>Posts: {data.posts.length}</h2>

      <h3>{data.users[0].name}</h3>
      <p>{data.posts[0].title}</p>
    </div>
  );
}

export default Users;