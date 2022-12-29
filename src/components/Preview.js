import React, { Component } from 'react';

class Preview extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='preview'>
        {/* <div className='generalInfo'>
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
        </div> */}
        <div className='workExperience'>
          <h1>Work Experience</h1>
          { this.props.state.experience.map(experience => {
            return (
              <div key={ experience.id } className='workExperienceItem'>
                <div className='workExperienceInfo'>
                  <span>{ experience.title }</span>
                  <span>{ experience.company }</span>
                  <span>{ experience.dateStart }</span>
                  <span>{ experience.dateEnd }</span>
                </div>
                <div className='workExperienceItemDesc'>{ experience.description }</div>
              </div>
            )
          })}
        </div>
        <div className='education'>
          <h1>Education</h1>
          { this.props.state.education.map(education => {
            return (
              <div key={ education.id } className='educationItem'>
                <div className='educationInfo'>
                  <span>{ education.title }</span>
                  <span>{ education.institution }</span>
                  <span>{ education.dateStart }</span>
                  <span>{ education.dateEnd }</span>
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