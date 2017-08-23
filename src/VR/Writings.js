import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react'

const Writings = () => {
  return (
    <Grid.Row>
      <Grid.Column>
        <div>
          <Header>
            <Image bordered centered
              src='assets/images/VR/01.png'
              as='a' size='large'
              href='https://medium.com/@hellosylvee/a-look-into-virtual-reality-7b23fc07b617'
              target='_blank'
            />s
          </Header>
        </div>
      </Grid.Column>
      <Grid.Column>
        <div>
          <Header>
            <Image bordered centered
              src='assets/images/VR/02.png'
              as='a' size='large'
              href='https://medium.com/@hellosylvee/a-further-look-into-virtual-reality-ca83a9a7e86f'
              target='_blank'
            />
          </Header>
        </div>
      </Grid.Column>
      <Grid.Column>
        <div>
          <Header>
            <Image bordered centered
              src='assets/images/VR/03.png'
              as='a' size='large'
              href='https://medium.com/@hellosylvee/learn-three-js-in-three-steps-ac126cc24284'
              target='_blank'
            />
          </Header>
        </div>
      </Grid.Column>
    </Grid.Row>
  );
}

export default Writings;
