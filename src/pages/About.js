import React from 'react'
import SocialMedia from '../components/SocialMedia'
import { Grid, Image, Header, Icon } from 'semantic-ui-react'
import imgUrl from '../backgrounds/intro.png'

const About = () => {

  const backgroundStyle = {
    backgroundImage: `url(${ imgUrl })`,
    position: 'absolute',
    top: '0',
    bottom: '0',
    margin: '-24px'
  }

  const socialMediaStyle = {
    paddingBottom: '24px'
  }

  const rowStyle = {
    marginTop: '48px'
  }

  return (
    <Grid style={backgroundStyle} stackable centered>
      <Grid.Row style={rowStyle}>
        <Header className='animated fadeIn' as='h2'> About </Header>
      </Grid.Row>
      <Header as='h4' className='animated fadeIn'> Hello and Welcome! </Header>
      <Grid.Row>
        <Grid.Column>
          <Image className='animated rollIn' centered shape='circular' src='/assets/images/profile.jpg' size='small' />
          <Header className='animated fadeIn' as='h2'>Sylvee Lee</Header>
          <SocialMedia/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p>
            I am a designer and developer in New York City, disrupting traditional business practices and designing state-of-the-art applications that involved user research, interaction design, and HTML/CSS/JS prototyping.
            <br/><br/>
            My passion is to learn every day, from javascript frameworks to design ethics. Currently, I have a tremendous interest in VR/AR and I enjoy working in a-frame, a webVR framework created by Mozilla. On my spare time, I like to design and code scenes, and they can be viewed on dribbble.
            <br/><br/>
            I am a Design Mentor at DesignLab and Springboard, and now currently looking for positions as a full-stack Product Designer in SF and NYC.
          </p>
          <Header textAlign='center'>Let's connect!</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={socialMediaStyle}>
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
                name='send'
                color='violet'
                size='big'/></a>
      </Grid.Row>
    </Grid>
  );
}

export default About;
