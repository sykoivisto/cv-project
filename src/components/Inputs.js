import React from 'react';

import EducationInputGroup from './EducationInputGroup';
import ExperienceInputGroup from './ExperienceInputGroup';
import PersonalInfoInputGroup from './PersonalInfoInputGroup';

const Inputs = (props) => {

  return (
    <div className='inputs'>
      <div className='groupWrapper'>
      <h1>Personal Details</h1>
      <PersonalInfoInputGroup data={props.state.personalInfo} update={props.updatePersonalInfo}></PersonalInfoInputGroup>
      </div>
      <div className='groupWrapper'>
      <h1>Work Experience</h1>
      {
        props.state.experience.map(experience => {
          return <ExperienceInputGroup key={experience.id} experience={experience} delete={props.deleteExperience} update={props.updateExperience}></ExperienceInputGroup>
        })
      }
      <button className='addButton' onClick={props.addExperience}>Add</button>
      </div>
      <div className='groupWrapper'>
      <h1>Education</h1>
      {
        props.state.education.map(education => {
          return <EducationInputGroup key={education.id} education={education} delete={props.deleteEducation} update={props.updateEducation}></EducationInputGroup>
        })
      }
      <button className='addButton' onClick={props.addEducation}>Add</button>
      </div>
    </div>
  )
}

export default Inputs;