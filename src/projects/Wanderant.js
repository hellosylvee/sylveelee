import React from 'react'

import { Grid, Header, Image, Icon } from 'semantic-ui-react'

const Wanderant = () => {
  const headerStyle = {
    paddingTop: '50px'
  }
  return(
    <Grid stackable>
      <Grid.Row centered columns="1">
        <Grid.Column>
          <Header style={headerStyle} as='h2' className='animated fadeIn'>Wanderant</Header>
          <div className='animated fadeIn'>
            <Image centered
              as='a'
              href='https://www.wanderant.com/?utm_source=BetaList#/start'
              target='_blank'
              src='/assets/images/work/work_wanderant.png' name='wanderant' size='large' />
            <Header as='h2'>A Smart Travel Planner
              <a target='_blank'
               rel='noopener noreferrer'
               href='https://www.wanderant.com/?utm_source=BetaList#/start'>
              <Icon link
                    name='external'
                    color='violet'
                    size='large'/></a>
            </Header>
            <p>
              Wanderant is a web and mobile app set out to reduce the hassles of travel planning by organizing the best travel tools and information into a single trip-planning workflow. It offers a simpler more fun process of planning, choices and logistics for the independent traveler.<br/><br/>
              Main tasks included design strategy, user research, usability testing, and UX design.
            </p>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns='4'>
        <Grid.Column>
          <Image centered bordered src='/assets/images/work/wanderant-5.jpg' size='large' />
          <Image centered bordered src='/assets/images/work/wanderant-6.jpg' size='large' />
        </Grid.Column>
        <Grid.Column>
          <Image centered bordered src='/assets/images/work/wanderant-7.jpg' size='large' />
          <Image centered bordered src='/assets/images/work/wanderant-8.jpg' size='large' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default Wanderant
