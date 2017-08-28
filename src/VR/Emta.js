import React from 'react';
import { Grid, Modal, Header, Image } from 'semantic-ui-react'

const Emta = () => {
  const textStyleInModal={
    width: '100%',
    textAlign: 'center'
  }

  return(
    <Grid.Column>
      <Modal size='large' trigger={
        <Image centered bordered
          src='assets/images/passion/mta.png'
          as='a' size='large'
          target='_blank'
        /> }>
        <Modal.Header>Passion Projects</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header textAlign='center'>eMTA LIRR</Header>
            <p style={textStyleInModal}>A redesign of MTA LIRR app</p>
            <Image src='assets/images/passion/mta-1-Cover.jpg' />
            <Image src='assets/images/passion/mta-2-LIRR-Fact.jpg' />
            <Image src='assets/images/passion/mta-3-Design-Process.jpg' />
            <Image src='assets/images/passion/mta-4-Research.jpg' />
            <Image src='assets/images/passion/mta-5-User-Problems.jpg' />
            <Image src='assets/images/passion/mta-6-Current-Workflow.jpg' />
            <Image src='assets/images/passion/mta-7-Screens.jpg' />
            <Image src='assets/images/passion/mta-8-Screens-II.jpg' />
            <Image src='assets/images/passion/mta-9-Ideate.jpg' />
            <Image src='assets/images/passion/mta-10-Features.jpg' />
            <Image src='assets/images/passion/mta-11-Proposed-Workflow.jpg' />
            <Image src='assets/images/passion/mta-12-Presentation.jpg' />
            <Image src='assets/images/passion/mta-13-Screens.jpg' />
            <Image src='assets/images/passion/mta-14-More-Screens.jpg' />
            <Image src='assets/images/passion/mta-15-Ticket-Purchasing.jpg' />
            <Image src='assets/images/passion/mta-16-Payment-Info.jpg' />
            <Image src='assets/images/passion/mta-17-Purchase-Confirmation.jpg' />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Grid.Column>
  )
}

export default Emta
