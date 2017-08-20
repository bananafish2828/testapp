import React, { Component } from 'react';
import Dragula from 'react-dragula';

import ListEntry from './ListEntry.jsx';

export default class DragNDrop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      testEntry: ['Swap me around', 'Swap her around', 'Swap him around']
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
      <div className='container' ref={this.dragulaDecorator}>
        { this.state.testEntry.map((entry, i) => {
          return <ListEntry entry={entry} key={i} /> 
        })}
        <div>test stuff goes here</div>
        <div>more test stuff here</div>
      </div>
    )
  }
}