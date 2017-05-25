import axios from 'axios';
export const HOST_ROOM_START = 'host_room_start';
export const HOST_ROOM = 'host_room';
export const HOST_ROOM_ERROR = 'host_room_error';

export function hostRoom(roomNumber) {
  return (dispatch) => {
    dispatch({type: HOST_ROOM_START})
    axios.post('http://localhost:3001/dog', roomNumber).then(({data}) => {
      dispatch({ type: HOST_ROOM, payload: data});
    }).catch((err) => {
      dispatch({type: HOST_ROOM_ERROR, payload: err})
    })
  }
}