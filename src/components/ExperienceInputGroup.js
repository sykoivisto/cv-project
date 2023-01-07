import React from 'react';

const ExperienceInputGroup = (props) => {

  const handleChange = (e) => {
    props.update({id: props.experience.id, property: e.target.id, value: e.target.value})
  }

  return (
    <div className='inputGroup'>
      <input onChange={handleChange} placeholder='Company' id='company' value={props.experience.company}></input>
      <input onChange={handleChange} placeholder='Title' id='title' value={props.experience.title}></input>
      <input onChange={handleChange} placeholder='Date Start' id='dateStart' value={props.experience.dateStart}></input>
      <input onChange={handleChange} placeholder='Date End' id='dateEnd' value={props.experience.dateEnd}></input>
      <textarea onChange={handleChange} placeholder='Description...' id='description' value={props.experience.description}></textarea>
      <button onClick={() => props.delete(props.experience.id)}>Delete</button>
    </div>
  )
}

export default ExperienceInputGroup;