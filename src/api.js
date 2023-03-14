import axios from "axios";

const ncApi = axios.create({
  baseURL: "https://house-of-games-4c69.onrender.com/api",
});

export const fetchReviews = () => {
  return ncApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};

export const fetchReviewById = (review_id) => {
  return ncApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const updateReviewVotes = (review_id, increment) => {
  return ncApi
    .patch(`/reviews/${review_id}`, { inc_votes: increment })
    .then((res) => {
      return res.data.review;
    });
};
