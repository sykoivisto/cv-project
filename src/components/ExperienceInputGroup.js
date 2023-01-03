import React, { Component } from 'react';

class ExperienceInputGroup extends Component {

  render() {
    const handleChange = (e) => {
      this.props.update({id: this.props.experience.id, property: e.target.id, value: e.target.value})
    }

    return (
      <div className='inputGroup'>
        <input onChange={handleChange} placeholder='Company' id='company'></input>
        <input onChange={handleChange} placeholder='Title' id='title'></input>
        <input onChange={handleChange} placeholder='Date Start' id='dateStart'></input>
        <input onChange={handleChange} placeholder='Date End' id='dateEnd'></input>
        <textarea onChange={handleChange} placeholder='Description...' id='description'></textarea>
        <button onClick={() => this.props.delete(this.props.experience.id)}>Delete</button>
      </div>
    )
  }
}

export default ExperienceInputGroup;