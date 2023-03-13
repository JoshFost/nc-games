import { useState, useEffect } from "react";
import { fetchReviews } from "../api";

const ReviewCard = () => {
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
      <ul>
        {reviewList.map((review) => {
          return (
            <li className="reviewList" key={review.review_id}>
              <img className="reviewList-img" src={review.review_img_url} />
              <p>Title: {review.title}</p>
              <p>Category: {review.category}</p>
              <p>Designer: {review.designer}</p>
              <p>Owner: {review.owner}</p>
              <p>Review: {review.review_body}</p>
              <p>Votes: {review.votes}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewCard;
