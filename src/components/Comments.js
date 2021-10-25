import { Segment } from "semantic-ui-react";

const Comments = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <Segment key={comment.id}>
          <div className="d-flex justify-between">
            <h3>{comment.name}</h3>
            <a href={`mailto:${comment.email}`}>{comment.email}</a>
          </div>
          <p>{comment.body}</p>
        </Segment>
      ))}
    </>
  );
};

export default Comments;
