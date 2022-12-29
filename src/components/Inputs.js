import React, { Component } from 'react';
import update from 'immutability-helper';

import EducationInputGroup from './EducationInputGroup';
import ExperienceInputGroup from './ExperienceInputGroup';
import PersonalInfoInputGroup from './PersonalInfoInputGroup';

const Experience = (id, company, title, dateStart, dateEnd, description) => {
  return {
    get id() { return id },
    get company() { return company },
    set company(val) { company = val },
    get title() { return title },
    set title(val) { title = val },
    get dateStart() { return dateStart },
    set dateStart(val) { dateStart = val },
    get dateEnd() { return dateEnd },
    set dateEnd(val) { dateEnd = val },
    get description() { return description },
    set description(val) { description = val },
  }
}

class Inputs extends Component {
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
    }

    this.onAddExperienceGroup = this.onAddExperienceGroup.bind(this);
    this.onDeleteExperienceGroup = this.onDeleteExperienceGroup.bind(this);
    this.onUpdateExperienceGroup = this.onUpdateExperienceGroup.bind(this);

    this.onAddEducationGroup = this.onAddEducationGroup.bind(this);
    this.onDeleteEducationGroup = this.onDeleteEducationGroup.bind(this);

  }

  // pass the delete funcitons as props to
  // <ExperienceInputGroup> and <EducationInputGroup>
  // so they are usable from the buttons within the components

  onAddExperienceGroup() { // create a new Experience object with a unique ID
    let id = new Date(); // use date as a unique id
    let newExperience = Experience(id.getTime()); // create a new experience obj with unique id
    this.setState({
      experience: this.state.experience.concat(newExperience)
    })
  }
  
  onDeleteExperienceGroup(id) { // filter out the object with the corresponding id
    this.setState({
      experience: this.state.experience.filter(item => {
        return item.id !== id
      })
    })
  }

  onUpdateExperienceGroup(updateInfo) {
    // receives the information needed to update the state here.
    // {id: string, property: string, value: string}
    const itemIndex = this.state.experience.findIndex(item => item.id === updateInfo.id);
    this.setState({
      experience: update(this.state.experience, {[itemIndex]: {[updateInfo.property]: {$set: updateInfo.value}}})
    })
  }
  
  onAddEducationGroup() {

  }

  onDeleteEducationGroup() {

  }

  render() {
    return (
      <div className='inputs'>
        <PersonalInfoInputGroup></PersonalInfoInputGroup>
        {
          this.state.experience.map(experience => {
            return <ExperienceInputGroup key={experience.id} experience={experience} delete={this.onDeleteExperienceGroup} update={this.onUpdateExperienceGroup}></ExperienceInputGroup>
          })
        }
        <button onClick={this.onAddExperienceGroup}>Add Work Experience +</button>
        <EducationInputGroup></EducationInputGroup>
        <button>Add Education +</button>
      </div>
    )
  }
}

export default Inputs;