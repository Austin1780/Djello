export const GET_REQUEST = "GET_REQUEST";
export const GET_BOARDS_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";

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

export function getBoards(user) {
  return dispatch => {
    try {
      dispatch(getRequest());

      fetch("./api/boards")
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

export function createBoard(user) {}
