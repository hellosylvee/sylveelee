import React from 'react';
import { Grid } from 'semantic-ui-react'
import Emta from './Emta.js'
import PivotPong from './PivotPong.js'
import Third from './Third.js'

const PassionProjects = ({ match }) => {
  return (
    <Grid.Row>
      <Emta/>
      <PivotPong/>
      <Third/>
    </Grid.Row>
  );
}

export default PassionProjects;
