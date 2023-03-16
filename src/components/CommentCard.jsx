// import { updateCommentVotes } from "../api";
import { useState } from "react";

const CommentCard = ({ comment }) => {
  return (
    <div className="comments">
      <p className="category-title">Comment:</p>
      <p>{comment.body}</p>
      <p>Author : {comment.author}</p>
      <p>Votes: {comment.votes}</p>
      <p>Created: {comment.created_at}</p>
    </div>
  );
};

export default CommentCard;

//   const handleVote = () => {
//     if (!hasVoted) {
//       updateCommentVotes(comment.comment_id, 1).then((updatedComment) => {
//         const updatedComments = [...review.comments].map((c) =>
//           c.comment_id === updatedComment.comment_id ? updatedComment : c
//         );
//         setReview((prevReview) => ({
//           ...prevReview,
//           comments: updatedComments,
//         }));
//         setHasVoted(true);
//       });
//     } else {
//       updateCommentVotes(comment.comment_id, -1).then((updatedComment) => {
//         const updatedComments = [...review.comments].map((c) =>
//           c.comment_id === updatedComment.comment_id ? updatedComment : c
//         );
//         setReview((prevReview) => ({
//           ...prevReview,
//           comments: updatedComments,
//         }));
//         setHasVoted(false);
//       });
//     }
//   };
// add these as props to...setReview, review
// const [hasVoted, setHasVoted] = useState(false);<<<state
