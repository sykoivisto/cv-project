import React, { Component } from 'react';

class educationInputGroup extends Component {

  render() {
    return (
      <div className='educationInput'>
        <h1>Education</h1>
        <input placeholder='Institution' id='institution'></input>
        <input placeholder='Title' id='title'></input>
        <input placeholder='Date Start' id='dateStart'></input>
        <input placeholder='Date End' id='dateEnd'></input>
      </div>
    )
  }
}

export default educationInputGroup;


