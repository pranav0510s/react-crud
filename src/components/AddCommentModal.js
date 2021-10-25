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
import { createComment } from "../actions/postDetailsActions";

const AddCommentModal = ({ open, setOpen, postId }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(createComment(postId, name, email, body));
    setLoading(false);
    handleClose();
  };

  const handleClose = () => {
    setName("");
    setEmail("");
    setBody("");
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>Add Comment</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Add Comment</Header>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <Input
                value={name}
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Field>
            <Form.Field>
              <Input
                type="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
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

export default AddCommentModal;
