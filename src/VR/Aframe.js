import React from 'react';
import { Grid, Image, Icon} from 'semantic-ui-react'

const Aframe = () => {
  return (
    <Grid.Row>
      <Grid.Column>
        <div className='container'>
          <Image bordered centered
            src='assets/images/VR/tv.png'
            as='a' size='large'/>
          <a href='https://nyan-cat-tv.glitch.me/'
             target='_blank'
             rel="noopener noreferrer">
            <div className='overlay'>
              <div className='text'>60's Tele&nbsp;
                <Icon name='external'/>
              </div>
            </div>
          </a>
        </div>
      </Grid.Column>
      <Grid.Column>
        <div className='container'>
          <Image bordered centered
            src='assets/images/VR/winter-wonderland.png'
            as='a' size='large' />
          <a href='https://winter-wonderland.glitch.me/'
             target='_blank'
             rel="noopener noreferrer">
            <div className='overlay'>
              <div className='text'>Winter Wonderland&nbsp;
                <Icon name='external'/>
              </div>
            </div>
          </a>
        </div>
      </Grid.Column>
      <Grid.Column>
        <div className='container'>
          <Image bordered centered
            src='assets/images/VR/flower-pots.png'
            as='a' size='large' />
          <a href='https://flower-pots.glitch.me/'
             target='_blank'
             rel="noopener noreferrer">
            <div className='overlay'>
              <div className='text'>Flower Pots&nbsp;
                <Icon name='external'/>
              </div>
            </div>
          </a>
        </div>
      </Grid.Column>
    </Grid.Row>
  );
}

export default Aframe;
