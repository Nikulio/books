import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import ReduxThunk from "redux-thunk";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import "reset-css/reset.css";

import reducers from "./reducers";
import App from "./сomponents/App";
import history from './history'

const theme = createMuiTheme();
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, reduxDevTools, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root"),
);

registerServiceWorker();
