import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import search from "./reducers/search";

export default createStore(search, applyMiddleware(logger, thunk));
