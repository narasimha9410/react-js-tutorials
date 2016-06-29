import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

const initialState = {
  featching: false,
  fetched: false, 
  users: [], 
  error: null,
}


const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_STAR": {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_USERS_ERROR": {
      return {...FETCH_USERS_ERROR, fetching: false, error: action.payload}
      break;
    }
    case "RECEIVE_USERS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload,
      }
      break;
    }
  }
  return state
}

const middleware = applyMiddleware(thunk, logger());

const store = createStore(reducer, middleware);



store.dispatch((dispatch) => {
  dispatch({type: "FETCH_USERS_STAR"})
  axios.get("http://rest.learncode.academy/api/wstern/users")
  .then((response) => {
    dispatch({type: "RECEIVE_USERS", playload: response.data})
  })
  .catch((err) => {
    dispatch({type: "FETCH_USERS_ERROR", playload: err})
  })
});
