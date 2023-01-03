import React, { Component } from 'react';

class PersonalInfoInputGroup extends Component {

  render() {
    const handleChange = (e) => {
      this.props.update({property: e.target.id, value: e.target.value})
    }

    return (
      <div className='inputGroup'>
        <input onChange={handleChange} placeholder='Name' id='name'></input>
        <input onChange={handleChange} placeholder='Title' id='title'></input>
        <input onChange={handleChange} placeholder='Phone' id='phone'></input>
        <input onChange={handleChange} placeholder='Email' id='email'></input>
        <input onChange={handleChange} placeholder='Location' id='location'></input>
        <textarea onChange={handleChange} placeholder='Description...' id='description'></textarea>
      </div>
    )
  }
}

export default PersonalInfoInputGroup