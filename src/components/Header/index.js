import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

import Logo from '../../assets/logo.png';

import {Container, HeaderImage} from './styles';

const Header = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Catalog')}>
        <HeaderImage source={Logo} />
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
