import { HOST_ROOM_START, HOST_ROOM, HOST_ROOM_ERROR } from '../actions/index';

const intialState = {
  connecting: false,
  connected: false,
  users: [],
  error: null,
};

export default function(state = {intialState}, action) {
  switch(action.type) {
    case HOST_ROOM_START: 
      return {...state, connecting: true}
      break;
    case HOST_ROOM_ERROR: 
      return {...state, connecting: false, error: action.payload}
      break;
    case HOST_ROOM: 
      return {
        ...state,
        connecting: false,
        connected: true,
        users: action.payload
      }
      break;
    default:
      return state;
  }
}