import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hostRoom } from '../actions/index';

class HostBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log("HOSTING DAT STICK");
    this.props.hostRoom(this.state.term);
    this.setState({term: ''});
  }
  
  render() {
    return (
      <form onSubmit = {this.onFormSubmit}>
        <input 
          value = {this.state.term}
          onChange = {this.onInputChange} />
        <span>
          <button type="submit">Host Game</button>
        </span>
      </form>
    );
  }
  
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hostRoom }, dispatch);
}

export default connect(null, mapDispatchToProps)(HostBar);

// var socket = io.connect('http://localhost');
//   socket.on('news', function (data) {
//     console.log(data);
//     socket.emit('my other event', { my: 'data' });
//   });