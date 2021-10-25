import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container } from "semantic-ui-react";
import HomePage from "./pages/HomePage";
import UserDetailsPage from "./pages/UserDetailsPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import { getUsers } from "./actions/userListActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user/:userId" component={UserDetailsPage} />
          <Route path="/user/:userId/:postId" component={PostDetailsPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
