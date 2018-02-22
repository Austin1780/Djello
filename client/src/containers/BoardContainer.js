import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Board from "../components/Board";
import { getBoards, createBoard } from "../actions";

const mapStateToProps = state => {
  return {
    user: state.user,
    boards: state.boards
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBoards: user => {
      dispatch(getBoards(user));
    },
    createBoard: user => {
      dispatch(createBoard(user.id));
    }
  };
};

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardContainer;
