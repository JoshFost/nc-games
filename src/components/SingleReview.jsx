import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviewById } from "../api";
import { Link } from "react-router-dom";
import { updateReviewVotes } from "../api";
import Comments from "./Comments";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState("");
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState(review.votes);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchReviewById(review_id).then((reviewData) => {
      setReview(reviewData);
    });
  }, [review_id]);

  const handleVote = () => {
    if (!hasVoted) {
      updateReviewVotes(review_id, 1).then((updatedReview) => {
        setReview(updatedReview);
        setHasVoted(true);
      });
    } else {
      updateReviewVotes(review_id, -1)
        .then((updatedReview) => {
          setReview(updatedReview);
          setHasVoted(false);
        })
        // if there is an error with the api when voting
        .catch((error) => {
          setError("An error occurred while updating votes");
          let voteValue;
          if (hasVoted) {
            voteValue = 1;
          } else {
            voteValue = -1;
          }
          setVotes(votes - voteValue);
          setHasVoted(!hasVoted);
        });
    }
  };

  if (!review) {
    return <h2>Loading Review...</h2>;
  }

  return (
    <div>
      <h2>{review.title}</h2>
      <img
        className="reviewList-img"
        src={review.review_img_url}
        alt="review logo"
      />
      <p>Review:</p>
      <p>{review.review_body}</p>
      <p>
        Votes: {review.votes}{" "}
        <button onClick={handleVote}>{hasVoted ? "Undo" : "Vote"}</button>
      </p>
      <Comments review_id={review_id}></Comments>
      <Link to={`/reviews`}>
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default SingleReview;
