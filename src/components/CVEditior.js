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

  render() {
    return (
      <div>
        <Inputs
          state={this.state}
          addExperience={this.onAddExperienceGroup}
          deleteExperience={this.onDeleteExperienceGroup}
          updateExperience={this.onUpdateExperienceGroup}
        ></Inputs>
        <Preview
          state={this.state}
        ></Preview>
      </div>
    );
  }
}

export default CVEditor;
