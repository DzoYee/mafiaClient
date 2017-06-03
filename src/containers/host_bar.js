import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hostRoom, joinRoom } from '../actions/index';

class HostBar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      roomCode: '',
      username: '',
    };

    this.onRoomInputChange = this.onRoomInputChange.bind(this);
    this.onUserInputChange = this.onUserInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onJoinRoom = this.onJoinRoom.bind(this);
  }

  onRoomInputChange(event) {
    this.setState({roomCode: event.target.value});
  }

  onUserInputChange(event) {
    this.setState({username: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.hostRoom(this.state.roomCode, this.state.username);
    this.setState({roomCode: ''});
    this.setState({username: ''});
  }

  onJoinRoom(event) {
    event.preventDefault();
    this.props.joinRoom(this.state.roomCode, this.state.username)
    this.setState({roomCode: ''});
    this.setState({username: ''});
  }
  
  render() {
    return (
      <form onSubmit = {this.onFormSubmit}>
        <input 
          placeholder = "Enter Room Name"
          value = {this.state.roomCode}
          onChange = {this.onRoomInputChange} />
        <input 
          placeholder = "Enter Username"
          value = {this.state.username}
          onChange = {this.onUserInputChange} />
        <span>
          <button type="button" onClick={this.onJoinRoom} >Join Game</button>
        </span>
        <span>
          <button type="submit">Host Game</button>
        </span>
      </form>
    );
  }
  
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hostRoom, joinRoom }, dispatch);
}

export default connect(null, mapDispatchToProps)(HostBar);