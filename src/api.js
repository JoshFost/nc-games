import axios from "axios";

const ncApi = axios.create({
  baseURL: "https://house-of-games-4c69.onrender.com/api",
});

export const fetchReviews = () => {
  return ncApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};
