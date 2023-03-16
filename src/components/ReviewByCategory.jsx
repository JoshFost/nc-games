import { useEffect, useState } from "react";
import { fetchReviewsByCategory } from "../api";
import { useParams } from "react-router-dom";

const ReviewByCategory = () => {
  const { categorySlug } = useParams();
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchReviewsByCategory().then((reviews) => {
      const filteredReviews = reviews.filter(
        (review) => review.category === categorySlug
      );
      setReviewList(filteredReviews);
      setIsLoading(false);
    });
  }, [categorySlug]);

  if (isLoading) {
    return (
      <div className="loader">
        <span className="loader-text">loading</span>
        <span className="load"></span>
      </div>
    );
  }

  return (
    <div className="categoryReviews">
      <h3>Reviews for {categorySlug}: </h3>

      <ul>
        {reviewList.map((review) => {
          return (
            <li className="categoriesList" key={review.review_id}>
              <p className="category-title">Title:</p>
              <p>{review.title}</p>
              <img
                className="reviewList-img"
                src={review.review_img_url}
                alt="review logo"
              />
              <p className="category-title">Review: </p>
              <p>{review.review_body}</p>
              <p>Author: {review.owner}</p>
              <p>Created: {review.created_at}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewByCategory;
