import { Link } from "react-router-dom";
const ReviewCard = ({ reviewList }) => {
  return (
    <div>
      <ul>
        {reviewList.map((review) => {
          return (
            <li className="reviewList" key={review.review_id}>
              <img
                className="reviewList-img"
                src={review.review_img_url}
                alt="review logo"
              />
              <p>
                <span className="review-headings">Title: </span>
                {review.title}
              </p>
              <p>
                <span className="review-headings">Category: </span>
                {review.category}
              </p>
              <p>
                <span className="review-headings">Designer: </span>
                {review.designer}
              </p>
              <p>
                <span className="review-headings">Owner: </span>
                {review.owner}
              </p>
              <Link to={`/reviews/${review.review_id}`}>
                <button className="button">See Review</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewCard;
