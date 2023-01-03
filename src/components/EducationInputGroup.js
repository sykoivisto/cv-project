import React, { Component } from 'react';

class educationInputGroup extends Component {

  render() {
    const handleChange = (e) => {
      this.props.update({id: this.props.education.id, property: e.target.id, value: e.target.value})
    }

    return (
      <div className='inputGroup'>
        <input onChange={handleChange} placeholder='Institution' id='institution'></input>
        <input onChange={handleChange} placeholder='Title' id='title'></input>
        <input onChange={handleChange} placeholder='Date Start' id='dateStart'></input>
        <input onChange={handleChange} placeholder='Date End' id='dateEnd'></input>
        <button onClick={() => this.props.delete(this.props.education.id)}>Delete</button>
      </div>
    )
  }
}

export default educationInputGroup;


