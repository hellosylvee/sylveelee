import React from 'react';
import { Grid, Image, Icon} from 'semantic-ui-react'
import ComingSoon from './ComingSoon.js'

const AframeTwo = () => {
  return (
    <Grid.Row>
      <Grid.Column>
        <ComingSoon/>
      </Grid.Column>
      <Grid.Column>
        {/* <div className='container'>
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
        </div> */}
      </Grid.Column>
      <Grid.Column>
        
      </Grid.Column>
    </Grid.Row>
  );
}

export default AframeTwo;
