import React ,{ Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import io from 'socket.io-client';

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