import React from 'react';
import { Grid, Header, Image} from 'semantic-ui-react'
import SocialMedia from '../components/SocialMedia'
import imgUrl from '../backgrounds/intro.png'

const AboutIntro = () => {
  const backgroundStyle = {
    backgroundImage: `url(${ imgUrl })`,
    padding: '120px 0px 40px 0px',
    height: '100%',
    marginTop: '-40',
    marginBottom: '36',
    textAlign: 'center',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  const headerStyle = {
    fontFamily: 'Playfair Display',
    fontSize: '4em'
  }

  const subHeaderStyle = {
    fontFamily: 'Raleway'
  }

  return(
    <Grid.Row style={backgroundStyle}>
      <Grid.Column>
        <Image bordered centered shape='circular' className='animated rollIn rellax' src='/assets/images/profile.jpg' size='small'/>
        <Header style={headerStyle} as='h2'
                className='animated fadeIn'>Sylvee Lee</Header>
        <SocialMedia/>
      </Grid.Column>
    </Grid.Row>
  )
}

export default AboutIntro
