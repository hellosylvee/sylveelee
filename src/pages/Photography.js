import React from 'react'
import { Grid, Image, Header} from 'semantic-ui-react'
import imgUrl from '../backgrounds/intro.png'

const Photography = () => {
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
    <Grid stackable centered columns={4} style={backgroundStyle}>
      <Grid.Row>
        <Header className='animated fadeIn' as='h2'> Photography </Header>
      </Grid.Row>
      <Header as='h4' className='animated fadeIn'> Taken with Pixel </Header>
      <Grid.Row>
        <Grid.Column>
          <Image
          bordered centered
          src='assets/images/photos/dino.jpg'
          name='dinosaur skeleton'
          size='massive' />
        </Grid.Column>
        <Grid.Column>
          <Image
          bordered centered
          src='assets/images/photos/chihuly.jpg'
          name='ferris wheel'
          size='massive' />
        </Grid.Column>
        <Grid.Column>
          <Image
          bordered centered
          src='assets/images/photos/bird.jpg'
          name='bird'
        size='massive' />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Image
          bordered centered
          src='assets/images/photos/postal.jpg'
          name='post office'
          size='massive' />
        </Grid.Column>
        <Grid.Column>
          <Image
          bordered centered
          src='assets/images/photos/bridge.jpg'
          name='brooklyn bridge'
          size='massive' />
        </Grid.Column>
        <Grid.Column>
          <Image
          bordered centered
          src='assets/images/photos/love.jpg'
          name='love sign on water'
          size='massive' />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Image
          bordered centered
          src='assets/images/photos/whale.jpg'
          name='lobster roll'
          size='massive' />
        </Grid.Column>
        <Grid.Column>
          <Image
          bordered centered
          src='assets/images/photos/starbucks.jpg'
          name='inspirational message'
          size='massive' />
        </Grid.Column>
        <Grid.Column>
          <Image
          bordered centered
          src='assets/images/photos/spice.jpg'
          name='hollywood sign'
          size='massive' />
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column>
          <Image
          bordered centered
          src='assets/images/photos/donuts.jpg'
          name='donuts'
          size='massive' />
        </Grid.Column>
        <Grid.Column>
          <Image
          bordered centered
          src='assets/images/photos/ramen.jpg'
          name='ramen'
          size='massive' />
        </Grid.Column>
        <Grid.Column>
          <Image
          bordered centered
          src='assets/images/photos/fire.jpg'
          name='woman breathing fire'
          size='massive' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Photography;
