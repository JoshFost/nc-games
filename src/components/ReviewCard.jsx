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
              <p>Title: {review.title}</p>
              <p>Category: {review.category}</p>
              <p>Designer: {review.designer}</p>
              <p>Owner: {review.owner}</p>
              <Link to={`/reviews/${review.review_id}`}>
                <button>See Review</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewCard;
