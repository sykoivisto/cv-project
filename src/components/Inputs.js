import React, { Component } from 'react';

import EducationInputGroup from './EducationInputGroup';
import ExperienceInputGroup from './ExperienceInputGroup';
import PersonalInfoInputGroup from './PersonalInfoInputGroup';



class Inputs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='inputs'>
        <PersonalInfoInputGroup></PersonalInfoInputGroup>
        <h1>Work Experience</h1>
        {
          this.props.state.experience.map(experience => {
            return <ExperienceInputGroup key={experience.id} experience={experience} delete={this.props.deleteExperience} update={this.props.updateExperience}></ExperienceInputGroup>
          })
        }
        <button onClick={this.props.addExperience}>Add Work Experience +</button>
        <h1>Education</h1>
        {
          this.props.state.education.map(education => {
            return <EducationInputGroup key={education.id} education={education} delete={this.props.deleteEducation} update={this.props.updateEducation}></EducationInputGroup>
          })
        }
        <button onClick={this.props.addEducation}>Add Education +</button>
      </div>
    )
  }
}

export default Inputs;