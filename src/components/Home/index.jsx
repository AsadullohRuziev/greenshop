import React from 'react';
import { Container } from './style';
import { useLocation } from 'react-router-dom';

const Generic = () => {
  const location = useLocation();
  console.log(location);
  return <Container>
      <h1> Home {location?.pathname}</h1>
  </Container>;
};

export default Generic;
