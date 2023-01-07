import Experience from './Experience';
import Education from './Education';
import PersonalInfo from './PersonalInfo';

const template = {
  personalInfo: PersonalInfo(
    'Micheal Edge',
    'Elevator inspector',
    '678-857-0303',
    'MichealSEdge@teleworm.us',
    'Marietta, GA',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed nisl vitae eros rutrum aliquet. Curabitur feugiat bibendum efficitur. Aenean dictum, neque quis imperdiet facilisis, massa lorem ultri.'
  ),
  experience: [
    Experience(
      1000,
      'Geris Hamburgers',
      'Elevator inspector',
      '4 January 2012',
      'Current',
      'Suspendisse et vulputate ligula. Vestibulum maximus ornare neque, non luctus nisi dapibus eget. In hac habitasse platea dictumst. Duis auctor dolor ac dignissim tempor.'
    ),
  ],
  education: [
    Education(
      2000,
      'University of Georgia',
      'B.S. Mechanical Engineering',
      'September 2007',
      'May, 2012'
    )
  ],
};
export default template;
