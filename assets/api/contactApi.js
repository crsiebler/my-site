import axios from "axios";

export const postContact = (payload) => {
  return axios.post("/api/contact", payload);
};
