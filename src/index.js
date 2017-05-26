import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createLogger } from 'redux-logger';

import thunk from 'redux-thunk';
import io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';

import Lobby from './components/lobby';
import Room from './room/room';

import reducers from './reducers';

let socket = io('http://localhost:3001/packtchat');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
const middleware = applyMiddleware(socketIoMiddleware, thunk, createLogger());
const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log('new client state', store.getState());
});
store.dispatch({type:'server/hello/', data:'Hello!'});

socket.on('connection', (socket) => {
  socket.on("action", (action) => {
    switch (action.type) {
      case "server/host_room":
        store.dispatch({type:'server/host_room', data: action.data});
        console.log("room is ready for joinig: ", action.data);
      case "message": 
        console.log("FUCK");
    }
  });
});

socket.on('message', (message) => {
  console.log("Got a message: ", message);
});


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

