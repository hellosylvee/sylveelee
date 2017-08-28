import React from 'react';
import { Grid, Header, Image} from 'semantic-ui-react'
import imgUrl from '../backgrounds/intro.png'

const Intro = () => {
  const backgroundStyle = {
    backgroundImage: `url(${ imgUrl })`,
    padding: '120px 0px 40px 0px',
    height: '100%',
    marginTop: '-40px',
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
        <Image centered className='animated rollIn rellax' src='/assets/svg/diamond.svg' size='tiny'/>
        <Header style={headerStyle} as='h2'
                className='animated fadeIn'>Sylvee Lee</Header>
        <Header as='h2'
                style={subHeaderStyle}>Product Designer & Developer</Header>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Intro
