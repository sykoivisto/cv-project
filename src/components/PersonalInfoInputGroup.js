import React from 'react';

const PersonalInfoInputGroup = (props) => {

  const handleChange = (e) => {
    props.update({property: e.target.id, value: e.target.value})
  }

  return (
    <div className='inputGroup'>
      <input onChange={handleChange} placeholder='Name' id='name' value={props.data.name}></input>
      <input onChange={handleChange} placeholder='Title' id='title' value={props.data.title}></input>
      <input onChange={handleChange} placeholder='Phone' id='phone' value={props.data.phone}></input>
      <input onChange={handleChange} placeholder='Email' id='email' value={props.data.email}></input>
      <input onChange={handleChange} placeholder='Location' id='location' value={props.data.location}></input>
      <textarea onChange={handleChange} placeholder='Description...' id='description' value={props.data.description}></textarea>
    </div>
  )
}

export default PersonalInfoInputGroup