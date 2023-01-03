import React, { useState } from 'react';
import update from 'immutability-helper';

import Inputs from './Inputs';
import Preview from './Preview';

const Experience = (id, company, title, dateStart, dateEnd, description) => {
  return {
    get id() {
      return id;
    },
    get company() {
      return company;
    },
    set company(val) {
      company = val;
    },
    get title() {
      return title;
    },
    set title(val) {
      title = val;
    },
    get dateStart() {
      return dateStart;
    },
    set dateStart(val) {
      dateStart = val;
    },
    get dateEnd() {
      return dateEnd;
    },
    set dateEnd(val) {
      dateEnd = val;
    },
    get description() {
      return description;
    },
    set description(val) {
      description = val;
    },
  };
};
const Education = (id, institution, title, dateStart, dateEnd) => {
  return {
    get id() {
      return id;
    },
    get institution() {
      return institution;
    },
    set institution(val) {
      institution = val;
    },
    get title() {
      return title;
    },
    set title(val) {
      title = val;
    },
    get dateStart() {
      return dateStart;
    },
    set dateStart(val) {
      dateStart = val;
    },
    get dateEnd() {
      return dateEnd;
    },
    set dateEnd(val) {
      dateEnd = val;
    },
  };
};

const CVEditor = (props) => {

  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    title: '',
    phone: '',
    email: '',
    location: '',
    description: '',
  })
  const [experience, setExperience] = useState([])
  const [education, setEducation] = useState([])


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