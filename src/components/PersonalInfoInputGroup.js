import React, { Component } from 'react';

class PersonalInfoInputGroup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.info.name,
      title: this.props.info.title,
      phone: this.props.info.phone,
      email: this.props.info.email,
      location: this.props.info.location,
      description: this.props.info.description,
    }
  }

  render() {

    const handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      }, () => this.props.update({property: e.target.id, value: this.state[e.target.id]}))
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