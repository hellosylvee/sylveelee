import React from 'react'

import { Grid, Header, Image, Icon } from 'semantic-ui-react'

const MoultonCampaign = () => {
  const headerStyle = {
    paddingTop: '50px'
  }
  return(
    <Grid stackable>
      <Grid.Row centered columns="1">
        <Grid.Column>
          <Header style={headerStyle} as='h2' className='animated fadeIn'>Seth Moulton For Congress</Header>
          <div className='animated fadeIn'>
            <Image centered
              as='a'
              href='http://www.sethmoulton.com/'
              target='_blank'
              src='/assets/images/work/work_sethmoulton_all.png' name='moultoncampaign' size='large' />
            <Header as='h2'>A Campaign Website&nbsp;
              <a target='_blank'
               rel='noopener noreferrer'
               href='https://www.sethmoulton.com'>
              <Icon link
                    name='external'
                    color='violet'
                    size='large'/></a>
            </Header>
            <p>
               Seth Wilbur Moulton was an American former Marine Corps officer, a member of the Democratic Party, and is now a U.S. Representative for Massachusetts's 6th congressional district. This site was designed and built for his run in 2014 congressional campaign.<br/><br/>Main tasks included interaction and graphic design.
            </p>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns='4'>
        <Grid.Column>
          <Image centered bordered src='/assets/images/work/moulton0.jpg' size='large' />
          <Image centered bordered src='/assets/images/work/moulton-initial-2.png' size='large' />
          <Image centered bordered src='/assets/images/work/moulton-initial-4.png' size='large' />
        </Grid.Column>
        <Grid.Column>
          <Image centered bordered src='/assets/images/work/moulton-initial-3.png' size='large' />
          <Image centered bordered src='/assets/images/work/moulton-initial-1.png' size='large' />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns='1'>
        <p>Initial sketches and layouts of webpages.</p>
      </Grid.Row>
      <Grid.Row centered columns='4'>
        <Grid.Column>
          <Image centered bordered src='/assets/images/work/moulton1.png' size='large' />
          <Image centered bordered src='/assets/images/work/moulton4.png' size='large' />
        </Grid.Column>
        <Grid.Column>
          <Image centered bordered src='/assets/images/work/moulton3.png' size='large' />
          <Image centered bordered src='/assets/images/work/moulton2.png' size='large' />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns='1'>
        <p>Final designs for the campaign website.</p>
      </Grid.Row>
    </Grid>
  )
}
export default MoultonCampaign
