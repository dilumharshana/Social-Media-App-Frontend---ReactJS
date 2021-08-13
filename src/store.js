import { createStore } from "redux";

import { reducers } from "./reducers/rootReducer";
import { Middleware } from "redux";

const initialStore = {};

export const store = createStore(reducers, initialStore);
