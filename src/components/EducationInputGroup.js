import React from 'react';

const educationInputGroup = (props) => {

  const handleChange = (e) => {
    props.update({id: props.education.id, property: e.target.id, value: e.target.value})
  }

  return (
    <div className='inputGroup'>
      <input onChange={handleChange} placeholder='Institution' id='institution' value={props.education.institution}></input>
      <input onChange={handleChange} placeholder='Title' id='title' value={props.education.title}></input>
      <input onChange={handleChange} placeholder='Date Start' id='dateStart' value={props.education.dateStart}></input>
      <input onChange={handleChange} placeholder='Date End' id='dateEnd' value={props.education.dateEnd}></input>
      <button onClick={() => props.delete(props.education.id)}>Delete</button>
    </div>
  )
}

export default educationInputGroup;


