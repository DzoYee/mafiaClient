import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Lobby from './components/lobby';
import Room from './components/room';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
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

