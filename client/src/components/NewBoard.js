import React, { PureComponent } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Jumbotron,
  Modal,
  ModalHeader,
  ModalFooter
} from "reactstrap";

class NewBoard extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.props.createBoard = this.props.createBoard.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Jumbotron className="welcome-panel welcome1">
          <h1 className="display-5">Welcome to Djello!</h1>
          <hr className="hr1" />
          <p>Create a new board to begin.</p>
          <i class="fa fa-arrow-down" />
          <br />
          <Button color="primary" size="lg" onClick={this.toggle}>
            New Board
          </Button>
        </Jumbotron>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>New Board</ModalHeader>
          <Form>
            <FormGroup className="extraPadding">
              <Label for="title">Title:</Label>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="enter your new title here"
              />
            </FormGroup>
          </Form>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>
              Create Board
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NewBoard;
