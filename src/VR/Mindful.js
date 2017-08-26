import React from 'react';

import { Grid, Modal, Header, Image } from 'semantic-ui-react'

const Mindful = () => {
  const textStyleInModal ={
    width: '100%',
    textAlign: 'center'
  }

  const pStyle = {
    width: '80%',
    marginBottom: '24'
  }

  return(
    <Grid.Column>
      <Modal size='large' trigger={
        <Image centered bordered
          src='assets/images/passion/mindful.png'
          as='a' size='large'
          target='_blank'
        /> }>
        <Modal.Header>Passion Projects</Modal.Header>
        <Modal.Content>
          <Image size='medium' src='/assets/images/passion/wireframe/image.png' />
          <Modal.Description>
            <Header textAlign='center'>Mindful App</Header>
            <p style={textStyleInModal}>A Meditation App for Busy People</p>
            <Image src='assets/images/passion/mindful-brainstorm.jpg' />
            <Header as='h5'>Idea Background Story</Header>
            <p style={pStyle}>
              Young professionals are out and about, slaying their days with much ease and confidence. They handle multiple tasks with dexterity and poise, so you must wonder, <i>do they have it all?</i> How do they do it?<br/><br/>
              I have always wondered about the successful people that I've admired. I've read biographies, interviews, and anything that I can answers to my questions. There was one consistency that I found in them, and it was <i>mindfulness</i>. Thus, the start of a new passion project called <strong>Mindful</strong>.
            </p>

            <Header as='h5'>Initial Wireframes</Header>
            <p style={pStyle}>
              There are plenty of great meditation apps such as Headspace, so why even bother create another one? Here's a secret: there will <i>always</i> be ideas that aren't original, but user experience and viability of an idea can trump the rest. As long as you give what the users need.<br/><br/>
              The flow is started with a new user, selecting a "theme" based on the music.
            </p>
            <p style={pStyle}>
              To be continued...
            </p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Grid.Column>
  )
}

export default Mindful
