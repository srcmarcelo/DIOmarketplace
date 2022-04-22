import styled from 'styled-components/native';
import {Image} from 'react-native';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderImage = styled(Image)`
  height: 55px;
  width: 55px;
`;
