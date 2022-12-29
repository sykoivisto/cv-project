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
        {
          this.props.state.experience.map(experience => {
            return <ExperienceInputGroup key={experience.id} experience={experience} delete={this.props.deleteExperience} update={this.props.updateExperience}></ExperienceInputGroup>
          })
        }
        <button onClick={this.props.addExperience}>Add Work Experience +</button>
        <EducationInputGroup></EducationInputGroup>
        <button>Add Education +</button>
      </div>
    )
  }
}

export default Inputs;