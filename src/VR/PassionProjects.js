import React from 'react';
import { Grid } from 'semantic-ui-react'
import Emta from './Emta.js'
import PivotPong from './PivotPong.js'
import ComingSoon from './ComingSoon.js'

const PassionProjects = ({ match }) => {
  return (
    <Grid.Row>
      <ComingSoon/>
      <Emta/>
      <PivotPong/>
    </Grid.Row>
  );
}

export default PassionProjects;
