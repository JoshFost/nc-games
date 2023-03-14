import ReviewCard from "./ReviewCard";
import { useState, useEffect } from "react";
import { fetchReviews } from "../api";

const Reviews = () => {
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchReviews().then((reviews) => {
      setReviewList(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }
  return (
    <div>
      <h2>Here is a list of reviews</h2>
      <ReviewCard reviewList={reviewList}></ReviewCard>
    </div>
  );
};

export default Reviews;
