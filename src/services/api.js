import axios from "axios";

const BASE_URL =
  "https://jsonplaceholder.typicode.com";

export async function fetchUsers() {
  const response = await axios.get(
    `${BASE_URL}/users`
  );

  return response.data;
}

export async function fetchPosts() {
  const response = await axios.get(
    `${BASE_URL}/posts`
  );

  return response.data;
}

export async function fetchTodos() {
  const response = await axios.get(
    `${BASE_URL}/todos`
  );

  return response.data;
}

export async function fetchUser(id) {
  const response = await axios.get(
    `${BASE_URL}/users/${id}`
  );

  return response.data;
}