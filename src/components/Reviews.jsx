import ReviewCard from "./ReviewCard";
import { useState } from "react";

const Reviews = () => {
  const [review, setReview] = useState("");
  return (
    <div>
      <h2>Here is a list of reviews</h2>
      <ReviewCard></ReviewCard>
    </div>
  );
};

export default Reviews;
