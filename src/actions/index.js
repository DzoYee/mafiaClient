import axios from 'axios';
export const HOST_ROOM_START = 'host_room_start';
export const HOST_ROOM = 'server/host_room';
export const HOST_ROOM_ERROR = 'host_room_error';

export function hostRoom(roomNumber) {
  return (dispatch) => {
    dispatch({
      type: HOST_ROOM,
      data: {
        roomNumber: roomNumber
      }
    });
  }
}