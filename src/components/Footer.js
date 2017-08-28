import React from 'react';
import { Grid, Header } from 'semantic-ui-react'

const Footer = () => {
  const footerStyle = {
    marginTop: '24'
  }
  const spanStyle = {
    paddingRight: '10',
    paddingBottom: '24'
  }
  return (
    <Grid.Row>
      <Header as='h6' style={footerStyle}>
        &#169; <span style={spanStyle}>2017 Sylvee Lee</span> Designed with React
      </Header>
    </Grid.Row>
  );
}

export default Footer;
