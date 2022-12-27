import React, { Component } from 'react';

class Preview extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='preview'>
        <div className='generalInfo'>
          <div className='nameTitle'>
            <p>{ this.props.name }</p>
            <p>{ this.props.title }</p>
          </div>
          <div className='contactInfo'>
            <p>{ this.props.phone }</p>
            <p>{ this.props.email }</p>
            <p>{ this.props.location }</p>
          </div>
        </div>
        <div className='summary'>
          <p>{ this.props.summary }</p>
        </div>
        <div className='workExperience'>
          <h1>Work Experience</h1>
          { this.props.workExperience.map(experience => {
            return (
              <div key={ experience.company + experience.title } className='workExperienceItem'>
                <div className='workExperienceInfo'>
                  <span>{ experience.title }</span>
                  <span>{ experience.company }</span>
                  <span>{ experience.dates }</span>
                </div>
                <div className='workExperienceItemDesc'>{ experience.desc }</div>
              </div>
            )
          })}
        </div>
        <div className='education'>
          <h1>Education</h1>
          { this.props.education.map(experience => {
            return (
              <div key={ experience.institution + experience.title } className='educationItem'>
                <div className='educationInfo'>
                  <span>{ experience.title }</span>
                  <span>{ experience.institution }</span>
                  <span>{ experience.dates }</span>
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