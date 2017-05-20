import React, { Component } from 'react';
import Counter from './Counter';
import HostBar from '../containers/host_bar';

export default class Lobby extends Component {
  render() {
    return (
      <div>
        <HostBar />
      </div>
    )
  }
}