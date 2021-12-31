import axios from "axios";

export default axios.create({
  headers: {
    Authorization: "Client-ID 4ODhv39NrMVVQ4hbwEsqJCePkc6ZfUqm6kOiD8fF-o8",
  },
  baseURL: "https://api.unsplash.com",
});
