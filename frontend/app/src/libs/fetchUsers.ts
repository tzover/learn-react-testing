import axios from "axios";

export async function fetchUsers() {
  // https://jsonplaceholder.typicode.com/users
  const response = axios.get("https://jsonplaceholder.typicode.com/users")

  console.log(response)
}