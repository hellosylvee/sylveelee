import React from 'react'
import { Grid, Header, Image, Icon } from 'semantic-ui-react'

const Kafsc = () => {
  const headerStyle = {
    paddingTop: '50px'
  }
  return(
    <Grid stackable>
      <Grid.Row centered columns="1">
        <Grid.Column>
          <Header style={headerStyle} as='h2' className='animated fadeIn'>KAFSC</Header>
          <div className='animated fadeIn'>
            <Image centered bordered
              as='a'
              href='https://advocacyforkafsc.herokuapp.com/'
              target='_blank'
              src='/assets/images/work/thumbnail-kafsc.png' name='kafsc' size='medium' shape='circular' />
            <Header as='h2'>An Advocacy Campaign&nbsp;
              <a target='_blank'
               rel='noopener noreferrer'
               href='https://advocacyforkafsc.herokuapp.com/'>
              <Icon link
                    name='external'
                    color='violet'
                    size='large'/></a>
            </Header>
            <p>
               Advocacy for KAFSC is an advocacy fund project for KAFSC, to raise awareness on domestic violence and solicit discretionary funds from council members of New York City. KAFSC is a community-based, nonprofit organization that offers assistance to Korean American families and domestic violence victims in greater New York area. I promote domestic violence awareness, generate funds for the nonprofit organization, and work with executive board members to organize events framing from races to spring formal for young professionals.<br/><br/>
              The project was deemed a success as funding increased 105% for fiscal year 2018, and obtained more funding from new councilmembers.
            </p>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns='4'>
        <Grid.Column>
          <Image centered bordered src='/assets/images/work/kafsc-1.jpg' name='nasdaq desktop' size='large' />
          <Image centered bordered src='/assets/images/work/kafsc-3.jpg' name='nasdaq desktop' size='large' />
        </Grid.Column>
        <Grid.Column>
          <Image centered bordered src='/assets/images/work/kafsc-4.jpg' name='nasdaq desktop' size='large' />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns='1'>
        <Grid.Column>
          <Image centered bordered
            src='/assets/images/work/kafsc.jpg' size='massive' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default Kafsc
