//syntax issue somewhere over here

export const GET_REQUEST = "GET_REQUEST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";

export function getRequest() {
  return {
    type: GET_REQUEST
  };
}

// Sends successful data response to reducer
export function getSuccess(data) {
  //data will be {films: }
  return {
    type: GET_SUCCESS,
    data
  };
}

// Sends the response error to the reducer
export function getFailure(error) {
  return {
    type: GET_FAILURE,
    error
  };
}

export function getBoards(user) {
  return async dispatch => {
    try {
      dispatch(getRequest());

      let dataObj = {};
      //
      // await fetch(`https://swapi.co/api/people/?page=${page}`)
      //   .then(response => {
      //     if (!response.ok) {
      //       throw new Error(`${response.status} ${response.statusText}`);
      //     }
      //     return response.json();
      //   })
      //   .then(json => {
      //     dataObj["people"] = json.results;
      //     return json.results;
      //   })
      //   .catch(error => {
      //     dispatch(getFailure(error));
      //   });

      dispatch(getSuccess(dataObj));
    } catch (e) {
      console.log(e);
    }
  };
}
