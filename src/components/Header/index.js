import React from 'react';

import Logo from '../../assets/logo.png';

import {Container, HeaderImage} from './styles';

const Header = () => {
  return (
    <Container>
      <HeaderImage source={Logo} />
    </Container>
  );
};

export default Header;
