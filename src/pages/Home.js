import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react'

import Intro from '../components/Intro'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'
// import VrDesign from '../VR/VrDesign'
import PassionProjects from '../VR/PassionProjects'
import Aframe from '../VR/Aframe'
import AframeTwo from '../VR/AframeTwo'
import Writings from '../VR/Writings'

class Home extends Component {
  render() {
    return (
      <Grid stackable centered columns={4}>
        <Intro/>

        {/* <Header as='h2'>VR Design</Header>
        <VrDesign/> */}

        <Header as='h2'>Passion Projects</Header>
        <PassionProjects/>

        <Header as='h2'>360&#176; VR</Header>
        <Aframe/>
        <AframeTwo/>

        <Header as='h2'>Medium Posts</Header>
        <Writings/>
        <SocialMedia/>
        <Footer/>
      </Grid>
    );
  }
}

export default Home;
