import React from 'react';
import { Grid, Icon } from 'semantic-ui-react'

const SocialMedia = () => {
  const socialStyle = {
    marginTop: '24px'
  }

  return (
    <Grid.Row style={socialStyle}>
      <a target='_blank'
         rel='noopener noreferrer'
         href='https://www.twitter.com/hellosylvee'>
        <Icon link
              name='twitter'
              color='violet'
              size='big'/></a>

      <a target='_blank'
         rel='noopener noreferrer'
         href='https://www.linkedin.com/in/sylviaclee/'>
        <Icon link
              name='linkedin'
              color='violet'
              size='big'/></a>

      <a target='_blank'
         rel='noopener noreferrer'
         href='https://mail.google.com/mail/?view=cm&fs=1&to=hellosylvee@gmail.com&su=Hello%20Sylvee&body=I%20am%20reaching%20out%20to%20you%20from%20your%20website.%20'>
        <Icon link
              name='mail outline'
              color='violet'
              size='big'/></a>

      <a target='_blank'
         rel='noopener noreferrer'
         href='https://www.instagram.com/hellosylveenyc'>
        <Icon link
              name='instagram'
              color='violet'
              size='big'/></a>

      <a target='_blank'
         rel='noopener noreferrer'
         href='https://www.medium.com/@hellosylvee'>
         <Icon link
               name='medium'
               color='violet'
               size='big'/></a>
    </Grid.Row>
  );
}

export default SocialMedia;
