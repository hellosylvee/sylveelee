import React from 'react';
import { Grid } from 'semantic-ui-react'
import Mindful from './Mindful.js'
import Emta from './Emta.js'
import PivotPong from './PivotPong.js'

const PassionProjects = ({ match }) => {
  return (
    <Grid.Row>
      <Mindful/>
      <Emta/>
      <PivotPong/>
    </Grid.Row>
  );
}

export default PassionProjects;
