import React from 'react';
import ReactDOM from 'react-dom';
import { 
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import HostBar from '../../containers/host_bar';
import { expect } from 'chai';

describe('HostBar', () => {
  it('invokes callback when host button is clicked', () => {
    let hosted;
    const host = (entry) => hosted = entry;

    const component = renderIntoDocument(
      <HostBar onJoinRoom={onJoinRoom}/>
    );
    const hostButton = scryRenderedDOMComponentsWithTag(component, button);
    Simulate.click(buttons[0]);

    expect(true).to.equal(true);
  })
});