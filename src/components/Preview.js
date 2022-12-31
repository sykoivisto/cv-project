import React, { Component } from 'react';

class Preview extends Component {

  render() {
    return (
      <div className='preview'>
        <div className='generalInfo'>
          <div className='nameGroup'>
            <p className='nameName'>{ this.props.form.personalInfo.name }</p>
            <p className='nameTitle'>{ this.props.form.personalInfo.title }</p>
          </div>
          <div className='contactInfo'>
            <p>{ this.props.form.personalInfo.phone }</p>
            <p>{ this.props.form.personalInfo.email }</p>
            <p>{ this.props.form.personalInfo.location }</p>
          </div>
        </div>
        <div className='summary'>
          <p>{ this.props.form.personalInfo.description }</p>
        </div>
        <div className='workExperience'>
          <h1>Work Experience</h1>
          { this.props.form.experience.map(experience => {
            return (
              <div key={ experience.id } className='workExperienceItem'>
                <div className='workExperienceInfo'>
                  <span className='experienceTitle'>{ experience.title }</span>
                  <span>
                    <span className='experienceCompany'>{ experience.company }</span>
                    <span> | </span>
                    <span className='experienceDates'>
                      <span>{ experience.dateStart }</span>
                      <span> – </span>
                      <span>{ experience.dateEnd }</span>
                    </span>
                  </span>
                </div>
                <div className='workExperienceItemDesc'>{ experience.description }</div>
              </div>
            )
          })}
        </div>
        <div className='education'>
          <h1>Education</h1>
          { this.props.form.education.map(education => {
            return (
              <div key={ education.id } className='educationItem'>
                <div className='educationInfo'>
                  <span>{ education.title }</span>
                  <span>
                    <span className='edInstitution'>{ education.institution }</span>
                    <span> | </span>
                    <span>{ education.dateStart }</span>
                    <span> – </span>
                    <span>{ education.dateEnd }</span>
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }


}

export default Preview;