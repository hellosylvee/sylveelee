import React from 'react'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'
import { Grid, Image, Header } from 'semantic-ui-react'
import imgUrl from '../backgrounds/intro.png'

const About = () => {

  const backgroundStyle = {
    backgroundImage: `url(${ imgUrl })`,
    padding: '120px 0px 600px 0px',
    height: '100%',
    marginTop: '-40px',
    textAlign: 'center',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <Grid style={backgroundStyle} stackable centered>
      <Grid.Row>
        <Header className='animated fadeIn' as='h2'> About </Header>
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
        </Grid.Column>
      </Grid.Row>
      <SocialMedia/>
      <Footer/>
    </Grid>
  );
}

export default About;
