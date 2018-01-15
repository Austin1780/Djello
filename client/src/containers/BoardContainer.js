import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Board from "../components/Board";
import { getBoards } from "../actions";

class BoardContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      boards: []
    };
  }

  render() {
    return <Board boards={this.props.boards} />;
  }
}

const mapStateToProps = state => {
  return {
    boards: state.boards
  };
};

const mapDispatchToProps = dispatch => {
  // Create an object with the action creators
  // (or, import them as a named object)
  const actions = {
    getBoards
  };

  // Returns exactly the same code as above
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
