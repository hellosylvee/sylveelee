import React from 'react';
import { Grid, Modal, Header, Image } from 'semantic-ui-react'

const PivotPong = () => {
  const textStyleInModal={
    width: '100%',
    textAlign: 'center'
  }

  return(
    <Grid.Column>
      <Modal size='large' trigger={
        <Image centered bordered
          src='assets/images/passion/pivotpong.png'
          as='a' size='large'
          target='_blank'
        /> }>
        <Modal.Header>Passion Projects</Modal.Header>
        <Modal.Content>
          <Image size='medium' src='/assets/images/passion/wireframe/image.png' />
          <Modal.Description>
            <Header textAlign='center'>p4: Pivot Pong App</Header>
            <p style={textStyleInModal}>A player finder app for ping pong games</p>
            <Image src='assets/images/passion/pivotpong-1.jpg' />
            <Image src='assets/images/passion/pivotpong-2.jpg' />
            <Image src='assets/images/passion/pivotpong-3.jpg' />
            <Image src='assets/images/passion/pivotpong-4.jpg' />
            <Image src='assets/images/passion/pivotpong-5.jpg' />
            <Image src='assets/images/passion/pivotpong-6.jpg' />
            <Image src='assets/images/passion/pivotpong-7.jpg' />
            <Image src='assets/images/passion/pivotpong-8.jpg' />
            <iframe
              title='p4 pivot pong video'
              src="https://player.vimeo.com/video/146607857"
              width="640"
              height="400"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen>
            </iframe>
            <p>
              <a href="https://vimeo.com/146607857">
                pivotpong-demo
              </a> from
              <a href="https://vimeo.com/user23203953">
                sylvee lee</a> on
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Grid.Column>
  )
}

export default PivotPong
