import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Segment, Icon } from "semantic-ui-react";
import { deletePost } from "../actions/userDetailsActions";

const Post = ({ post, userId }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await dispatch(deletePost(post.id));
    setLoading(false);
  };

  return (
    <Segment key={post.id} loading={loading}>
      {post.title}
        <ul>
            <li style={{  display: "inline"}}>
                <Link onClick={handleDelete} >
                <Icon link name="trash" />
                Delete
                </Link>
<div>

</div>
                <Link to={`/user/${userId}/${post.id}`}>
                    <Icon name="info" />
                    Learn More
                </Link>
            </li>
        </ul>

    </Segment>
  );
};

export default Post;
