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
            <Header as='h2'>A Smart Travel Planner&nbsp;
              <a target='_blank'
               rel='noopener noreferrer'
               href='https://www.wanderant.com/?utm_source=BetaList#/start'>
              <Icon link
                    name='external'
                    color='violet'
                    size='large'/></a>
            </Header>
            <p>
              Wanderant is a mobile responsive app set out to reduce the hassles of travel planning by organizing the best travel tools and information into a single trip-planning workflow. It offers a simpler more fun process of planning, choices and logistics for the independent traveler.<br/><br/>
              Main tasks included design strategy, user research, usability testing, and UX design.
            </p>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns='3'>
        <Grid.Column>
          <Image centered bordered src='/assets/images/work/wanderant-5.jpg' size='massive' />
          <Image centered bordered src='/assets/images/work/wanderant-6.jpg' size='massive' />
        </Grid.Column>
        <Grid.Column>
          <Image centered bordered src='/assets/images/work/wanderant-7.jpg' size='massive' />
          <Image centered bordered src='/assets/images/work/wanderant-8.jpg' size='massive' />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns='1'>
        <p>Planning a trip involves a lot of research. People typically search and then stumble onto several websites before they find information that is applicable to them. Most sites are geared toward booking flights and accommodation, but lack a sophisticated and integrated itinerary tool.<br/><br/>With two other designers, we conducted user interviews and learned that people search for places based on photo, not content. Some people utilize a geographical map to choose places that they want to travel. But there is a good chunk of people who don't use planning tools, and they rather "wing it".<br/><br/>We found opportunities to gain quick "feel" of highlights through in-depth filtering, structure search process from macro to micro, and list recommendations and tips.</p>
      </Grid.Row>
      <Grid.Row centered columns='3'>
        <Grid.Column>
          <Image centered bordered src='/assets/images/work/wanderant-9.jpg' size='massive' />
          <Image centered bordered src='/assets/images/work/wanderant-10.jpg' size='massive' />
        </Grid.Column>
        <Grid.Column>
          <Image centered bordered src='/assets/images/work/wanderant-11.jpg' size='massive' />
          <Image centered bordered src='/assets/images/work/wanderant-12.jpg' size='massive' />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns='1'>
        <p>First iteration of UI screens after usability testing.</p>
      </Grid.Row>
      <Grid.Row centered columns='3'>
        <Grid.Column>
          <Image centered bordered src='/assets/images/work/wanderant-13.jpg' size='massive' />
          <Image centered bordered src='/assets/images/work/wanderant-14.jpg' size='massive' />
        </Grid.Column>
        <Grid.Column>
          <Image centered bordered src='/assets/images/work/wanderant-15.jpg' size='massive' />
          <Image centered bordered src='/assets/images/work/wanderant-16.jpg' size='massive' />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns='1'>
        <p>Final iteration of UI screens.</p>
      </Grid.Row>
    </Grid>
  )
}
export default Wanderant
