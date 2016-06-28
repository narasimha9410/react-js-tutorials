import {combineReducers, createStore} from "redux";

const reducer = function(state, action) {
  if (action.type === "INC") {
    return state + action.number;
  }
  if (action.type === "DEC") {
    return state - action.number;
  }
  return state;
}

const userReducer = (state, action) => {

};

const tweetsReducer = (state, action) => {

};

const reducers = combineReducers({
  user: userReducer
})


/*

{
  user: {
    name: "shihao", 
    age: 29,
  },
  tweets: []
}
*/
const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch({type: "INC", number: 1});
store.dispatch({type: "INC", number: 1});
store.dispatch({type: "INC", number: 1});
store.dispatch({type: "INC", number: 1});
store.dispatch({type: "INC", number: 1});
store.dispatch({type: "DEC", number: 1});
store.dispatch({type: "DEC", number: 1});
store.dispatch({type: "DEC", number: 1});