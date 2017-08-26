import React from 'react';
import { Grid, Image, Icon } from 'semantic-ui-react'

const Writings = () => {
  return (
    <Grid.Row>
      <Grid.Column>
        <div className='container'>
          <Image bordered centered
            src='assets/images/VR/01.png'
            as='a' size='large' />
          <a href='https://medium.com/@hellosylvee/a-look-into-virtual-reality-7b23fc07b617'
             target='_blank'
             rel="noopener noreferrer">
            <div className='overlay'>
              <div className='text'>A Look Into Virtual Reality&nbsp;
                <Icon name='external'/>
              </div>
            </div>
          </a>
        </div>
      </Grid.Column>
      <Grid.Column>
        <div className='container'>
          <Image bordered centered
            src='assets/images/VR/02.png'
            as='a' size='large' />
          <a href='https://medium.com/@hellosylvee/a-further-look-into-virtual-reality-ca83a9a7e86f'
             target='_blank'
             rel="noopener noreferrer">
            <div className='overlay'>
              <div className='text'>A Further Look Into VR&nbsp;
                <Icon name='external'/>
              </div>
            </div>
          </a>
        </div>
      </Grid.Column>
      <Grid.Column>
        <div className='container'>
          <Image bordered centered
            src='assets/images/VR/03.png'
            as='a' size='large' />
          <a href='https://medium.com/@hellosylvee/learn-three-js-in-three-steps-ac126cc24284'
             target='_blank'
             rel="noopener noreferrer">
            <div className='overlay'>
              <div className='text'>Learn Three.js in Three Steps&nbsp;
                <Icon name='external'/>
              </div>
            </div>
          </a>
        </div>
      </Grid.Column>
    </Grid.Row>
  );
}

export default Writings;
