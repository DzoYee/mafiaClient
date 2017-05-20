import axios from 'axios';
export const HOST_ROOM = 'host_room';

export function hostRoom(roomNumber) {
  return (dispatch) => {
    axios.get('http://localhost:3001/dog').then(({data}) => {
      dispatch({ type: 'FETCH_DOG', payload: data});
    });
  }
}