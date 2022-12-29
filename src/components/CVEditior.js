import React, { Component } from 'react';
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

class CVEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        name: String,
        title: String,
        phone: String,
        email: String,
        location: String,
        description: String,
      },
      experience: [],
      education: [],
    };

    this.onAddExperienceGroup = this.onAddExperienceGroup.bind(this);
    this.onDeleteExperienceGroup = this.onDeleteExperienceGroup.bind(this);
    this.onUpdateExperienceGroup = this.onUpdateExperienceGroup.bind(this);

    this.onAddEducationGroup = this.onAddEducationGroup.bind(this);
    this.onDeleteEducationGroup = this.onDeleteEducationGroup.bind(this);
    this.onUpdateEducationGroup = this.onUpdateEducationGroup.bind(this);

    this.onUpdatePersonalInfo = this.onUpdatePersonalInfo.bind(this);
  }

  onAddExperienceGroup() {
    // create a new Experience object with a unique ID
    let id = new Date(); // use date as a unique id
    let newExperience = Experience(id.getTime()); // create a new experience obj with unique id
    this.setState({
      experience: this.state.experience.concat(newExperience),
    });
  }

  onDeleteExperienceGroup(id) {
    // filter out the object with the corresponding id
    this.setState({
      experience: this.state.experience.filter((item) => {
        return item.id !== id;
      }),
    });
  }

  onUpdateExperienceGroup(updateInfo) {
    // receives the information needed to update the state here.
    // {id: string, property: string, value: string}
    const itemIndex = this.state.experience.findIndex(
      (item) => item.id === updateInfo.id
    );
    this.setState({
      experience: update(this.state.experience, {
        [itemIndex]: { [updateInfo.property]: { $set: updateInfo.value } },
      }),
    });
  }

  onAddEducationGroup() {
    let id = new Date(); // use date as a unique id
    let newEducation = Education(id.getTime()); // create a new obj with unique id
    this.setState({
      education: this.state.education.concat(newEducation),
    });
  }

  onDeleteEducationGroup(id) {
    // filter out the object with the corresponding id
    this.setState({
      education: this.state.education.filter((item) => {
        return item.id !== id;
      }),
    });
  }

  onUpdateEducationGroup(updateInfo) {
    // receives the information needed to update the state here.
    // {id: string, property: string, value: string}
    const itemIndex = this.state.education.findIndex(
      (item) => item.id === updateInfo.id
    );
    this.setState({
      education: update(this.state.education, {
        [itemIndex]: { [updateInfo.property]: { $set: updateInfo.value } },
      }),
    });
  }

  onUpdatePersonalInfo(updateInfo) {
    this.setState({
      personalInfo: update(this.state.personalInfo, {
        [updateInfo.property]: { $set: updateInfo.value },
      }),
    });
  }

  render() {
    return (
      <div>
        <Inputs
          state={this.state}
          addExperience={this.onAddExperienceGroup}
          deleteExperience={this.onDeleteExperienceGroup}
          updateExperience={this.onUpdateExperienceGroup}
          addEducation={this.onAddEducationGroup}
          deleteEducation={this.onDeleteEducationGroup}
          updateEducation={this.onUpdateEducationGroup}
          updatePersonalInfo={this.onUpdatePersonalInfo}
        ></Inputs>
        <Preview form={this.state}></Preview>
      </div>
    );
  }
}

export default CVEditor;
