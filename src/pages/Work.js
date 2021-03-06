import React from 'react'
import { Link, Route } from 'react-router-dom'
import Intro from '../components/Intro'
import Kafsc from '../projects/Kafsc'
import Uxdc from '../projects/Uxdc'
import Nasdaq from '../projects/Nasdaq'
// import NqMobile from '../projects/NqMobile'
// import NqWebhost from '../projects/NqWebhost'
import Wanderant from '../projects/Wanderant'
import MoultonCampaign from '../projects/MoultonCampaign'
import Allstate from '../projects/Allstate'
import ExpressScripts from '../projects/ExpressScripts'

import { Grid, Image, Header } from 'semantic-ui-react'

const Work = ({ match }) => {
  const rowStyle = {
    marginTop: '36'
  }

  const imageStyle = {
    padding: '0px 10px'
  }

  const linkStyle = {
    fontFamily: 'Raleway, sans-serif'
  }
  return (
    <Grid stackable centered>
      <Intro/>
      <Grid.Row style={rowStyle}>
        <Header className='animated fadeIn' as='h2'> Work </Header>
      </Grid.Row>
      <Header as='h4' className='animated fadeIn'> Select a project to view </Header>
      <Grid.Row>
        <a style={imageStyle}>
          <Link to={`${match.url}/allstate`}>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-nexion.png'
                   name='allstate'
                   size='tiny'
                   shape='circular'
                   bordered centered />
            <div style={linkStyle}>Allstate</div>
          </Link>
        </a>

        <a style={imageStyle}>
          <Link to={`${match.url}/express-scripts`}>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-rx.png'
                   name='express scripts'
                   size='tiny'
                   shape='circular'
                   bordered centered />
            <div style={linkStyle}>Express Scripts</div>
          </Link>
        </a>

        <a style={imageStyle}>
          <Link to={`${match.url}/kafsc`}>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-kafsc.png'
                   name='kafsc'
                   size='tiny'
                   shape='circular'
                   bordered centered />
            <div style={linkStyle}>KAFSC</div>
          </Link>
        </a>

        <a style={imageStyle}>
          <Link to={`${match.url}/nasdaq`}>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-nasdaq.png'
                   name='nasdaq desktop'
                   size='tiny'
                   shape='circular'
                   bordered centered />
            <div style={linkStyle}>Nasdaq</div>
          </Link>
        </a>

        {/* <a style={imageStyle}>
          <Link to={`${match.url}/nqmobile`}>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-nasdaq.png'
                   name='nasdaq mobile'
                   size='tiny'
                   shape='circular'
                   bordered centered />
            <div style={linkStyle}>Mobile</div>
          </Link>
        </a>

        <a style={imageStyle}>
          <Link to={`${match.url}/nqwebhost`}>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-nasdaq.png'
                   name='nasdaq webhost'
                   size='tiny'
                   shape='circular'
                   bordered centered />
            <div style={linkStyle}>Webhosting</div>
          </Link>
        </a> */}

        <a style={imageStyle}>
          <Link to={`${match.url}/uxdc`}>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-uxdc.png'
                   name='uxdc'
                   size='tiny'
                   shape='circular'
                   bordered centered />
            <div style={linkStyle}>UXDC</div>
          </Link>
        </a>

        <a style={imageStyle}>
          <Link to={`${match.url}/wanderant`}>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-wanderant.png'
                   name='wanderant'
                   size='tiny'
                   shape='circular'
                   bordered centered />
            <div style={linkStyle}>Wanderant</div>
          </Link>
        </a>

        <a style={imageStyle}>
          <Link to={`${match.url}/moultoncampaign`}>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-sethmoulton.png'
                   name='sethmoulton'
                   size='tiny'
                   shape='circular'
                   bordered centered />
            <div style={linkStyle}>Seth Moulton</div>
          </Link>
        </a>

        <Route path={`${match.url}/allstate`} component={Allstate}/>
        <Route path={`${match.url}/express-scripts`} component={ExpressScripts}/>
        <Route path={`${match.url}/kafsc`} component={Kafsc}/>
        <Route path={`${match.url}/nasdaq`} component={Nasdaq}/>
        {/* <Route path={`${match.url}/nqmobile`} component={NqMobile}/>
        <Route path={`${match.url}/nqwebhost`} component={NqWebhost}/> */}
        <Route path={`${match.url}/uxdc`} component={Uxdc}/>
        <Route path={`${match.url}/wanderant`} component={Wanderant}/>
        <Route path={`${match.url}/moultoncampaign`} component={MoultonCampaign}/>
        {/* <Route exact path={match.url} render={() => (
          <Header style={headerStyle}>Please select a project to view.</Header>
        )}/> */}
      </Grid.Row>
    </Grid>
  )
}

export default Work;
