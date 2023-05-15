import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootreducer";

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  rootReducer, // here is our root reducer
  initialState, //initialState
  composeWithDevTools(applyMiddleware(...middleWare)) //any kind of middle ware

  //   i am using thunk as middle ware to set a dev tool for redux
  // using the chrome extion of redux to check the values in your redux store
);

export { store };
