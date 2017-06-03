import axios from 'axios';
const HOST_ROOM = 'server/host_room';
const JOIN_ROOM = 'server/join_room';

function hostRoom(roomName, username) {
  return (dispatch) => {
    dispatch({
      type: HOST_ROOM,
      data: {
        roomName: roomName,
        username: username
      }
    });
  }
}

function joinRoom(roomName, username) {
  return (dispatch) => {
    dispatch({
      type: JOIN_ROOM,
      data: {
        roomName: roomName,
        username: username
      }
    });
  }
}

module.exports = {
  hostRoom: hostRoom, 
  joinRoom: joinRoom,
  HOST_ROOM: HOST_ROOM,
  JOIN_ROOM: JOIN_ROOM
};