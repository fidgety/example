import { applyMiddleware, createStore, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import search from "./reducers/search";

const history = createHistory();

export default createStore(
  connectRouter(history)(search),
  compose(applyMiddleware(routerMiddleware(history), logger, thunk))
);
