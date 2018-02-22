export const GET_REQUEST = "GET_REQUEST";
export const GET_BOARDS_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";
export const ADD_BOARD = "ADD_BOARD";

export function getRequest() {
  return {
    type: GET_REQUEST
  };
}

export function getBoardsSuccess(data) {
  return {
    type: GET_BOARDS_SUCCESS,
    data
  };
}

export function getFailure(error) {
  return {
    type: GET_FAILURE,
    error
  };
}

export function addBoard(data) {
  return {
    type: ADD_BOARD,
    data: data
  };
}

export function createBoard(userId) {
  return async dispatch => {
    try {
      const results = await fetch("/api/boards/new", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId })
      });
      const newBoard = await results.json();
      newBoard.Lists = [];
      dispatch(addBoard(newBoard));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getBoards(user) {
  return dispatch => {
    try {
      dispatch(getRequest());

      fetch("/api/boards", {
        method: "GET",
        credentials: "include"
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(json => {
          dispatch(getBoardsSuccess(json.results));
        })
        .catch(error => {
          dispatch(getFailure(error));
        });
    } catch (e) {
      console.log(e);
    }
  };
}
