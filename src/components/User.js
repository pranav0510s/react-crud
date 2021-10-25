import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";

const User = ({ user }) => {
  return (
    <Card>
      <Card.Content>
        {user.name}
        <Card.Meta>
          {user.email}
          <br />
          {user.phone.split("x")[0]}
          <br />
          {user.website}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button fluid as={Link} to={`/user/${user.id}`}>
          Details
        </Button>
      </Card.Content>
    </Card>
  );
};

export default User;
