import React, { Component } from 'react';
import Dragula from 'react-dragula';

import ListEntry from './ListEntry.jsx';

export default class DragNDrop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      targetList: ['item goes here', 'test message here', 'drop stuff here'],
      sourceList: ['something is here', 'move me please!', 'the good stuff']
    }
  }

  dragulaDecorator(componentBackingInstance) {
    if (componentBackingInstance) {
      let options = {};
      Dragula([componentBackingInstance], options);
    }
  }

  render() {
    console.log('length of entries', this.state.testEntry.length)
    this.state.testEntry.map((entry, i) => {
      console.log('entry #', i, ':', entry);
    })
    return (
      <div className='target' ref={this.dragulaDecorator}>
        { this.state.testEntry.map((entry, i) => 
          <ListEntry entry={entry} key={i} /> 
        )}
        <div>test stuff goes here</div>
        <div>more test stuff here</div>
      </div>
    )
  }
}