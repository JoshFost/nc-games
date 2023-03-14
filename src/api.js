import axios from "axios";

const ncApi = axios.create({
  baseURL: "https://house-of-games-4c69.onrender.com/api",
});
//get
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
//patch
export const updateReviewVotes = (review_id, increment) => {
  return ncApi
    .patch(`/reviews/${review_id}`, { inc_votes: increment })
    .then((res) => {
      return res.data.review;
    });
};
// Need to make app.patch  /api/reviews/:review_id/comments end point for comment vote increment
// export const updateCommentVotes = (comment_id, review_id, increment) => {
//   return ncApi
//     .post(`/reviews/${review_id}/${comment_id}`, { inc_votes: increment })
//     .then((res) => {
//       return res.data.comment;
//     });
// };

export const fetchCommentsByReviewId = (review_id) => {
  return ncApi.get(`/reviews/${review_id}/comments`).then((res) => {
    console.log(res.data.comments);
    return res.data.comments;
  });
};
