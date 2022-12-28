import React, { Component } from 'react';

class ExperienceInputGroup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.experience.id
    }
  }

  render() {
    return (
      <div className='workExperienceInput'>
        <h1>Work Experience</h1>
        <input placeholder='Company' id='company'></input>
        <input placeholder='Title' id='title'></input>
        <input placeholder='Date Start' id='dateStart'></input>
        <input placeholder='Date End' id='dateEnd'></input>
        <textarea placeholder='Description...' id='desc'></textarea>
        <button onClick={() => this.props.delete(this.props.experience.id)}>Remove Item</button>
      </div>
    )
  }
}

export default ExperienceInputGroup;