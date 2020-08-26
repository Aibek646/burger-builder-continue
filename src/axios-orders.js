import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-cfb42.firebaseio.com/",
});

export default instance;
