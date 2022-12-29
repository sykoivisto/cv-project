import React, { Component } from 'react';

class ExperienceInputGroup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.experience.id,
      company: this.props.experience.company,
      title: this.props.experience.title,
      dateStart: this.props.experience.dateStart,
      dateEnd: this.props.experience.dateEnd,
      description: this.props.experience.description,
    }
  }

  render() {

    const handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      }, () => this.props.update({id: this.state.id, property: e.target.id, value: this.state[e.target.id]}))
    }

    return (
      <div className='workExperienceInput'>
        <input onChange={handleChange} placeholder='Company' id='company'></input>
        <input onChange={handleChange} placeholder='Title' id='title'></input>
        <input onChange={handleChange} placeholder='Date Start' id='dateStart'></input>
        <input onChange={handleChange} placeholder='Date End' id='dateEnd'></input>
        <textarea onChange={handleChange} placeholder='Description...' id='description'></textarea>
        <button onClick={() => this.props.delete(this.props.experience.id)}>Remove Item</button>
      </div>
    )
  }
}

export default ExperienceInputGroup;