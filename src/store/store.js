import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducers/index-reducer";

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
