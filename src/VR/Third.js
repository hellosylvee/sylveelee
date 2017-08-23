import React from 'react';
import { Grid, Modal, Header, Image } from 'semantic-ui-react'

const Third = () => {
  const textStyleInModal={
    width: '100%',
    textAlign: 'center'
  }

  return(
    <Grid.Column>
      <Modal size='large' trigger={
        <Image centered bordered
          src='https://placeholdit.co//i/800x600'
          as='a' size='large'
          target='_blank'
        /> }>
        <Modal.Header>Passion Projects</Modal.Header>
        <Modal.Content>
          <Image size='medium' src='/assets/images/passion/wireframe/image.png' />
          <Modal.Description>
            <Header textAlign='center'>Oh no! A project is on the way.</Header>
            <Image centered size='large' src='https://4.bp.blogspot.com/-NsmRhj9F8KI/WOJPjBeWzSI/AAAAAAAOXGI/4tXYKjEGU3c9uRoP9KwY8Ese-_pJA7lNACLcB/s1600/AW401992_01.gif' />
            <p style={textStyleInModal}>Stay tuned!</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Grid.Column>
  )
}

export default Third
