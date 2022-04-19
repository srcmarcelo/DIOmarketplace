import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  CartPricing,
  CartButton,
  CartButtonText,
  CartTotalPrice,
} from './styles';

export default function FloatingCart() {
  const navigation = useNavigation();

  return (
    <Container>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <CartButtonText>2 items</CartButtonText>
        <CartPricing>
          <CartTotalPrice>R$ 200,00</CartTotalPrice>
        </CartPricing>
      </CartButton>
    </Container>
  );
}
