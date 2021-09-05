import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

const getPost = () => instance.get("/posts");
const postData = (post) => instance.post("/posts", post);

export { getPost, postData };
