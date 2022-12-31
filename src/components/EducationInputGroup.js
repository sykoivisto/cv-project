import React, { Component } from 'react';

class educationInputGroup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.education.id,
      institution: this.props.education.institution,
      title: this.props.education.title,
      dateStart: this.props.education.dateStart,
      dateEnd: this.props.education.dateEnd,
    }
  }

  render() {

    const handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      }, () => this.props.update({id: this.state.id, property: e.target.id, value: this.state[e.target.id]}))
    }

    return (
      <div className='inputGroup'>
        <input onChange={handleChange} placeholder='Institution' id='institution'></input>
        <input onChange={handleChange} placeholder='Title' id='title'></input>
        <input onChange={handleChange} placeholder='Date Start' id='dateStart'></input>
        <input onChange={handleChange} placeholder='Date End' id='dateEnd'></input>
        <button onClick={() => this.props.delete(this.props.education.id)}>Delete</button>
      </div>
    )
  }
}

export default educationInputGroup;


