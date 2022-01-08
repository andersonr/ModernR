import axios from "axios";

const KEY = "AIzaSyD--nrdJDSPz2I3sy4H6AzU8pl6hBQ9IzM";
///search
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 5, key: KEY },
});
