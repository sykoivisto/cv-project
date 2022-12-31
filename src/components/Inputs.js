import React, { Component } from 'react';

import EducationInputGroup from './EducationInputGroup';
import ExperienceInputGroup from './ExperienceInputGroup';
import PersonalInfoInputGroup from './PersonalInfoInputGroup';

class Inputs extends Component {

  render() {
    return (
      <div className='inputs'>
        <div className='groupWrapper'>
        <h1>Personal Details</h1>
        <PersonalInfoInputGroup info={this.props.state.personalInfo} update={this.props.updatePersonalInfo}></PersonalInfoInputGroup>
        </div>
        <div className='groupWrapper'>
        <h1>Work Experience</h1>
        {
          this.props.state.experience.map(experience => {
            return <ExperienceInputGroup key={experience.id} experience={experience} delete={this.props.deleteExperience} update={this.props.updateExperience}></ExperienceInputGroup>
          })
        }
        <button className='addButton' onClick={this.props.addExperience}>Add</button>
        </div>
        <div className='groupWrapper'>
        <h1>Education</h1>
        {
          this.props.state.education.map(education => {
            return <EducationInputGroup key={education.id} education={education} delete={this.props.deleteEducation} update={this.props.updateEducation}></EducationInputGroup>
          })
        }
        <button className='addButton' onClick={this.props.addEducation}>Add</button>
        </div>
      </div>
    )
  }
}

export default Inputs;