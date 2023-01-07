import React, { useState } from 'react';
import update from 'immutability-helper';

import Inputs from './Inputs';
import Preview from './Preview';

import Experience from './helpers/Experience';
import Education from './helpers/Education';

import template from './helpers/template';

const CVEditor = () => {

  const [personalInfo, setPersonalInfo] = useState(template.personalInfo)
  const [experience, setExperience] = useState(template.experience)
  const [education, setEducation] = useState(template.education)


  const onAddExperienceGroup = () => {
    // create a new Experience object with a unique ID
    let id = new Date(); // use date as a unique id
    let newExperience = Experience(id.getTime()); // create a new experience obj with unique id
    setExperience(experience.concat(newExperience))
  }

  const onDeleteExperienceGroup = (id) => {
    // filter out the object with the corresponding id
    setExperience(experience.filter((item) => {
      return item.id !== id;
    }));
  }

  const onUpdateExperienceGroup = (updateInfo) => {
    // receives the information needed to update the state here.
    // {id: string, property: string, value: string}
    const itemIndex = experience.findIndex(
      (item) => item.id === updateInfo.id
    );
    setExperience(update(experience, {
      [itemIndex]: { [updateInfo.property]: { $set: updateInfo.value } },
    }))
  }

  const onAddEducationGroup = () => {
    let id = new Date(); // use date as a unique id
    let newEducation = Education(id.getTime()); // create a new obj with unique id
    setEducation(education.concat(newEducation))
  }

  const onDeleteEducationGroup = (id) => {
    // filter out the object with the corresponding id
    setEducation(education.filter((item) => {
      return item.id !== id;
    }))
  }

  const onUpdateEducationGroup = (updateInfo) => {
    // receives the information needed to update the state here.
    // {id: string, property: string, value: string}
    const itemIndex = education.findIndex(
      (item) => item.id === updateInfo.id
    );
    setEducation(update(education, {
      [itemIndex]: { [updateInfo.property]: { $set: updateInfo.value } },
    }))
  }

  const onUpdatePersonalInfo = (updateInfo) => {
    setPersonalInfo(update(personalInfo, {
      [updateInfo.property]: { $set: updateInfo.value },
    }))
  }

  return (
    <div className='wrapper'>
      <Inputs
        state={{personalInfo, experience, education}}
        addExperience={onAddExperienceGroup}
        deleteExperience={onDeleteExperienceGroup}
        updateExperience={onUpdateExperienceGroup}
        addEducation={onAddEducationGroup}
        deleteEducation={onDeleteEducationGroup}
        updateEducation={onUpdateEducationGroup}
        updatePersonalInfo={onUpdatePersonalInfo}
      ></Inputs>
      <Preview form={{personalInfo, experience, education}}></Preview>
    </div>
  );
}

export default CVEditor;