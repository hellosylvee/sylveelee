import React from 'react';
import { Grid, Header } from 'semantic-ui-react'
import Mindful from '../VR/Mindful.js'
import Emta from '../VR/Emta.js'
import PivotPong from '../VR/PivotPong.js'
import ThreeD from '../VR/ThreeD.js'
import Aframe from '../VR/Aframe'
import imgUrl from '../backgrounds/intro.png'

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${ imgUrl })`,
    padding: '120px 0px 100px 0px',
    height: '100%',
    marginTop: '-40px',
    textAlign: 'center',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <Grid style={backgroundStyle} stackable centered columns={4}>

      <Grid.Row>
        <Header className='animated fadeIn' as='h2'> Side Projects </Header>
      </Grid.Row>
      <Header as='h4' className='animated fadeIn'> Completed Outside of Work </Header>
      <Grid.Row>
        <Emta/>
        <PivotPong/>
        <Mindful/>
      </Grid.Row>
      <Grid.Row>
        <ThreeD/>
        <Grid.Column/>
        <Grid.Column/>
      </Grid.Row>

      <Header as='h2'>360&#176; VR</Header>
      <Aframe/>
    </Grid>
  );
}

export default Home;
