import React ,{ Component } from 'react';
import io from 'socket.io-client';

let socket = io.connect('http://localhost:3001');

class Room extends Component {
  render() {
    return (
      <div>
        Room!
      </div>
    );
  }
}

export default Room;