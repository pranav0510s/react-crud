import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Loader } from "semantic-ui-react";
import Post from "../components/Post";
import AddPostModal from "../components/AddPostModal";
import { getPosts } from "../actions/userDetailsActions";

const UserDetailsPage = ({ match }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { userId } = match.params;
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.userDetails);
  const { users } = useSelector((state) => state.userList);

  useEffect(() => {
    users && setUser(users.find((user) => user.id.toString() === userId));
  }, [users, userId]);

  useEffect(() => {
    dispatch(getPosts(userId));
  }, [dispatch, userId]);

  return (
    <>
      {loading ? (
        <Loader active />
      ) : (
        <>
          <div className="d-flex justify-between align-center">
            <Link to="/" title="Back Home">
              <Icon name="arrow left" size="large" />
            </Link>
            <h1>{user && user.name}</h1>

            <Icon
              name="plus circle"
              size="large"
              onClick={() => setOpen(true)}
              title="Create Post"
              className="pointer">
            </Icon>
            <AddPostModal userId={userId} open={open} setOpen={setOpen} />
          </div>
          {posts.map((post) => (
            <Post key={post.id} post={post} userId={userId} />
          ))}
        </>
      )}
    </>
  );
};

export default UserDetailsPage;
