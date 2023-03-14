import { useState } from "react";
import { postCommentByReviewId } from "../api";
import { Link } from "react-router-dom";

const CommentAdder = (review_id, setComments) => {
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");
  const [posted, setPosted] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment === "" || author === "") {
      setPosted("Please fill in all the fields");
    } else {
      setPosted("Posing Comment...");
      postCommentByReviewId(review_id, { body: comment, username: author })
        .then((newComment) => {
          setComment("");
          setAuthor("");
          setPosted("Comment posted successfully!");
          setComments((previousComments) => [newComment, ...previousComments]);
        })
        .catch((error) => {
          setPosted("An error occured while posting the comment");
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Comment: </label>
      <textarea
        id="comment"
        placeholder="Write your comment here..."
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      ></textarea>

      <label htmlFor="name">Username: </label>
      <textarea
        id="name"
        placeholder="Please enter your username..."
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
      ></textarea>
      <Link to={`/reviews/${review_id}`}>
        <button type="submit">Submit</button>
      </Link>
    </form>
  );
};

export default CommentAdder;
