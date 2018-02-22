import * as Actions from "./actions";

const initialState = {
  boards: [],
  lists: [],
  cards: [],
  isFetching: false,
  error: null
};

export function djello(state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_BOARD:
      return {
        ...state,
        boards: [action.data, ...state.boards]
      };
    case Actions.GET_BOARDS_SUCCESS:
      return {
        ...state,
        boards: action.data.boards,
        isFetching: false
      };
    case Actions.GET_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_FAILURE:
      console.log("Error:", action.error);
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}
