import {combineReducers, createStore} from "redux";


const userReducer = (state={}, action) => {
  switch (action.type) {
    case "CHANGE_NAME": {
      state = {...state, name: action.playload}
      break;
    }
    case "CHANGE_AGE": {
      state = {...state, age: action.playload}
      break;
    }
  }
  return state;
};

const tweetsReducer = (state=[], action) => {
  return state;
};

const reducers = combineReducers({
  user: userReducer, 
  tweet: tweetsReducer
})


const store = createStore(reducers);

store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch({type: "CHANGE_NAME", playload: "Shihao"});
store.dispatch({type: "CHANGE_AGE", playload: 29});
