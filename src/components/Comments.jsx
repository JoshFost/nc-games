import { fetchCommentsByReviewId } from "../api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import { postCommentByReviewId } from "../api";
import { Link } from "react-router-dom";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const [showCommentAdder, setShowCommentAdder] = useState(false);

  useEffect(() => {
    fetchCommentsByReviewId(review_id).then((commentsData) => {
      setComments(commentsData);
    });
  }, [review_id]);

  //   const handleAddComment = (comment, author) => {
  //     // console.log(review_id, "review id");
  //     postCommentByReviewId(review_id, { username: author, body: comment })
  //       .then((newComment) => {
  //         setComments((previousComments) => [newComment, ...previousComments]);
  //         setShowCommentAdder(false);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  return (
    <div className="commentsList">
      <h3>Comments:</h3>
      {comments &&
        comments.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
            ></CommentCard>
          );
        })}
      {/* {showCommentAdder && ( */}
      <CommentAdder
        review_id={review_id}
        setComments={setComments}
        //   handleAddComment={(author, comment) =>
        //     handleAddComment(author, comment, setComments)
        //   }
      ></CommentAdder>
      {/* )}
      {!showCommentAdder && (
        <Link to={`/reviews/${review_id}/comments`}>
          <button>Add Comment</button>
        </Link> */}
      {/* )} */}
    </div>
  );
};

export default Comments;
//  <button onClick={toggleCommentAdder}>Add Comment</button>;

//   const toggleCommentAdder = () => {
//     setShowCommentAdder(!showCommentAdder);
//   };

//prop for comment adder
//   toggleCommentAdder={toggleCommentAdder}
