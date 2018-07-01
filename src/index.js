import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import Index from './сomponents/Index';
import 'reset-css/reset.css';

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, reduxDevTools, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Index/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

