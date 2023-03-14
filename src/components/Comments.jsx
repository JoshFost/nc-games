import { fetchCommentsByReviewId } from "../api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsByReviewId(review_id).then((commentsData) => {
      console.log(commentsData, "comments data");
      setComments(commentsData);
    });
  }, [review_id]);

  return (
    <div>
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
    </div>
  );
};

export default Comments;
