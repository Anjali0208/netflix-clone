import axios from "axios";

/** base url to make requests to the movie database */
/** API is from a free open source site - themoviedb.org */

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default instance;
