const CommentCard = ({ comment }) => {
  console.log(comment);
  return (
    <div>
      <p>{comment.body}</p>
      <p>Author : {comment.author}</p>
      <p>Votes : {comment.votes}</p>
      <p>Created: {comment.created_at}</p>
    </div>
  );
};

export default CommentCard;
