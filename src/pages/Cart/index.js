/* eslint-disable react-native/no-inline-styles */
import React, {useState, useMemo} from 'react';
import {View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import EmptyCart from '../../components/EmptyCart';

import {
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitleContainer,
  ProductTitle,
  ProductPriceContainer,
  ProductSinglePrice,
  TotalContainer,
  ProductPrice,
  ProductQuantity,
  ActionContainer,
  ActionButton,
  TotalProductsContainer,
  TotalProductsText,
  SubTotalValue,
} from './styles';

import formatValue from '../../utils/formatValue';

export default function Cart() {
  const [products, setProducts] = useState([]);

  const cartSize = useMemo(() => {
    return products.length;
  }, [products]);

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    return formatValue(cartAmount);
  }, [products]);

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          ListEmptyComponent={<EmptyCart />}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({item}) => (
            <Product>
              <ProductImage source={{uri: item.image_url}} />
              <ProductTitleContainer>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPriceContainer>
                  <ProductSinglePrice>
                    {formatValue(item.price)}
                  </ProductSinglePrice>
                  <TotalContainer>
                    <ProductQuantity>{item.quantity}x</ProductQuantity>
                    <ProductPrice>
                      {formatValue(item.price * item.quantity)}
                    </ProductPrice>
                  </TotalContainer>
                </ProductPriceContainer>
              </ProductTitleContainer>
              <ActionContainer>
                <ActionButton onPress={() => {}}>
                  <FeatherIcon name="plus" color="#e83f5b" size={16} />
                </ActionButton>
                <ActionButton onPress={() => {}}>
                  <FeatherIcon name="minus" color="#e83f5b" size={16} />
                </ActionButton>
              </ActionContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <TotalProductsContainer>
        <FeatherIcon name="shopping-cart" color="#fff" size={24} />
        <TotalProductsText>
          {cartSize}
          {cartSize === 1 ? ' itens' : ' item'}
        </TotalProductsText>
        <SubTotalValue>{cartTotal}</SubTotalValue>
      </TotalProductsContainer>
    </Container>
  );
}
