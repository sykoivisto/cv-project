import React from 'react';

const ExperienceInputGroup = (props) => {

  const handleChange = (e) => {
    props.update({id: props.experience.id, property: e.target.id, value: e.target.value})
  }

  return (
    <div className='inputGroup'>
      <input onChange={handleChange} placeholder='Company' id='company'></input>
      <input onChange={handleChange} placeholder='Title' id='title'></input>
      <input onChange={handleChange} placeholder='Date Start' id='dateStart'></input>
      <input onChange={handleChange} placeholder='Date End' id='dateEnd'></input>
      <textarea onChange={handleChange} placeholder='Description...' id='description'></textarea>
      <button onClick={() => props.delete(props.experience.id)}>Delete</button>
    </div>
  )
}

export default ExperienceInputGroup;