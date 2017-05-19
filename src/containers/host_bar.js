import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
    this.setState({term: ''});
  }
  
  render() {
    return (
      <form onSubmit = {this.onFormSubmit}>
        <input 
          value = {this.state.term}
          onChange = {this.onInputChange} />
        <span>
          <button type="submit">Submit</button>
        </span>
      </form>
    );
  }
  
}

export default HostBar;