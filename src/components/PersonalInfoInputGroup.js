import React, { Component } from 'react';

class PersonalInfoInputGroup extends Component {

  render() {
    return (
      <div className='personalDetailsInput'>
        <h1>Personal Details</h1>
        <input placeholder='Name' id='name'></input>
        <input placeholder='Title' id='title'></input>
        <input placeholder='Phone' id='phone'></input>
        <input placeholder='Email' id='email'></input>
        <input placeholder='Location' id='location'></input>
        <textarea placeholder='Description' id='desc'></textarea>
      </div>
    )
  }
}

export default PersonalInfoInputGroup