import React from 'react';

const Preview = (props) => {

  return (
    <div className='preview'>
      <div className='generalInfo'>
        <div className='nameGroup'>
          <p className='nameName'>{ props.form.personalInfo.name }</p>
          <p className='nameTitle'>{ props.form.personalInfo.title }</p>
        </div>
        <div className='contactInfo'>
          <p>{ props.form.personalInfo.phone }</p>
          <p>{ props.form.personalInfo.email }</p>
          <p>{ props.form.personalInfo.location }</p>
        </div>
      </div>
      <div className='summary'>
        <p>{ props.form.personalInfo.description }</p>
      </div>
      <div className='workExperience'>
        <h1>Work Experience</h1>
        { props.form.experience.map(experience => {
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
        { props.form.education.map(education => {
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

export default Preview;