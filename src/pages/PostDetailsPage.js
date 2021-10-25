import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Segment, Loader, Icon } from "semantic-ui-react";
import { getComments } from "../actions/postDetailsActions";
import AddCommentModal from "../components/AddCommentModal";
import Comments from "../components/Comments";
import EditCommentModal from "../components/EditPostModal"

const PostDetailsPage = ({ match }) => {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const { userId, postId } = match.params;

  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);

  const { comments, loading } = useSelector((state) => state.postDetails);
  const { users } = useSelector((state) => state.userList);
  const { posts } = useSelector((state) => state.userDetails);

  useEffect(() => {
    users && setUser(users.find((user) => user.id.toString() === userId));
    posts && setPost(posts.find((post) => post.id.toString() === postId));
  }, [users, posts, postId, userId]);

  useEffect(() => {
    dispatch(getComments(postId));
  }, [dispatch, match, postId]);

  return (
    <>
      {loading ? (
        <Loader active />
      ) : (
        post && (
          <>
            <div className="d-flex justify-between align-center">
              <Link to={`/user/${post.userId}`} title="Back">
                <Icon name="arrow left" size="large" />
              </Link>
              <h1>{user && user.name}</h1>
              <Icon name="plus" size="large" style={{ opacity: "0" }} />
            </div>
            {post && (
              <>
                <Segment textAlign="center">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </Segment>
              </>
            )}

              <Icon
              name="edit"
              size="large"
              onClick={() => setOpen(true)}
              title="Create Post"
              className="pointer">
                 Edit
            </Icon>
            <EditCommentModal userId={userId} open={open} setOpen={setOpen} />
          </>
        )
      )}
    </>
  );
};

export default PostDetailsPage;
