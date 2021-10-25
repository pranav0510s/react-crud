import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Form,
  Header,
  Input,
  Modal,
  TextArea,
} from "semantic-ui-react";
import { createPost } from "../actions/userDetailsActions";

const AddPostModal = ({ open, setOpen, userId }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(createPost(userId, title, body));
    setLoading(false);
    handleClose();
  };

  const handleClose = () => {
    setTitle("");
    setBody("");
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>Add Post</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Add Post</Header>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <Input
                value={title}
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Field>
            <Form.Field>
              <TextArea
                value={body}
                placeholder="Enter Body"
                onChange={(e) => setBody(e.target.value)}
                required
              />
            </Form.Field>
            <Button onClick={handleClose} type="button" loading={loading}>
              Cancel
            </Button>
            <Button type="submit" primary loading={loading}>
              Save
            </Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default AddPostModal;
