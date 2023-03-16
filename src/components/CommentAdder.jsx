import { useState } from "react";
import { postCommentByReviewId } from "../api";
import { Link } from "react-router-dom";

const CommentAdder = ({ review_id, setComments }) => {
  const [comment, setComment] = useState("");
  // const [author, setAuthor] = useState("");
  const user = "tickle122";
  const [posted, setPosted] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment === "") {
      // || author === ""
      setPosted(<p>Please fill in all the fields</p>);
    } else {
      setIsPosting(true);
      setPosted(<p>Posing Comment...</p>);
      postCommentByReviewId(review_id, user, comment)
        .then((newComment) => {
          setIsPosting(false);
          setComment("");
          // setAuthor("");
          setPosted(<p>Comment posted successfully!</p>);
          setComments((previousComments) => [newComment, ...previousComments]);
        })
        .catch((error) => {
          setPosted(<p>An error occurred while posting the comment</p>);
          setIsPosting(false);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Write a comment...</h3>
      {/* <label htmlFor="name">Username: </label>
      <textarea
        id="name"
        placeholder="Please enter your username..."
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
      ></textarea> */}

      <label htmlFor="comment">Comment: </label>
      <textarea
        id="comment"
        placeholder="Write your comment here..."
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      ></textarea>
      {posted ? <div>{posted}</div> : null}
      <button disabled={isPosting}>Submit</button>
    </form>
  );
};

export default CommentAdder;
