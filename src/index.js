import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
// import promise from 'redux-promise'

import Lobby from './components/lobby';
import Room from './room/room';

import reducers from './reducers';

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/room" component={Room} />
          <Route path="/" component={Lobby} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
,document.querySelector('.mount'));

