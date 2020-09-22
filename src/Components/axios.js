import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend007.herokuapp.com",
});

export default instance;
