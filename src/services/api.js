export async function fetchUsersAndPosts() {
  const [usersResponse, postsResponse] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
  ]);

  if (!usersResponse.ok || !postsResponse.ok) {
    throw new Error("Request failed");
  }

  const users = await usersResponse.json();
  const posts = await postsResponse.json();

  return { users, posts };
}